import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/**
 * Interactive WebGL scene for the hero: a glowing wireframe core,
 * orbiting rings, floating shapes and a particle field that reacts to the mouse.
 * Pauses when off-screen and renders a single static frame for reduced-motion users.
 */
const HeroScene = ({ accent = '#38bdf8' }) => {
  const mountRef = useRef(null)
  const accentRef = useRef(new THREE.Color(accent))
  const targetColor = useRef(new THREE.Color(accent))

  // Smoothly blend to the active slide's accent colour
  useEffect(() => {
    targetColor.current.set(accent)
  }, [accent])

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isSmall = window.innerWidth < 768

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    } catch {
      return // WebGL unavailable — the hero still works without the scene
    }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    mount.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x020617, 0.045)

    const camera = new THREE.PerspectiveCamera(55, mount.clientWidth / mount.clientHeight, 0.1, 100)
    camera.position.set(0, 0, 12)

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.35))
    const keyLight = new THREE.PointLight(accentRef.current, 60, 40)
    keyLight.position.set(4, 4, 6)
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(0x818cf8, 40, 40)
    rimLight.position.set(-6, -3, 4)
    scene.add(rimLight)

    // Main group — positioned right on desktop, centred behind content on mobile
    const core = new THREE.Group()
    core.position.set(isSmall ? 0 : 4.2, isSmall ? 1.5 : 0.2, 0)
    core.scale.setScalar(isSmall ? 0.75 : 1)
    scene.add(core)

    // Inner glossy solid
    const innerGeo = new THREE.IcosahedronGeometry(1.6, 1)
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2,
      flatShading: true,
      emissive: accentRef.current.clone(),
      emissiveIntensity: 0.15,
    })
    const inner = new THREE.Mesh(innerGeo, innerMat)
    core.add(inner)

    // Outer wireframe shell
    const shellGeo = new THREE.IcosahedronGeometry(2.3, 2)
    const shellMat = new THREE.MeshBasicMaterial({
      color: accentRef.current.clone(),
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    })
    const shell = new THREE.Mesh(shellGeo, shellMat)
    core.add(shell)

    // Vertex glow points on the shell
    const shellPointsMat = new THREE.PointsMaterial({
      color: accentRef.current.clone(),
      size: 0.07,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const shellPoints = new THREE.Points(shellGeo, shellPointsMat)
    core.add(shellPoints)

    // Orbit rings
    const rings = []
    const ringMat = new THREE.MeshBasicMaterial({
      color: accentRef.current.clone(),
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    ;[
      { r: 3.1, tilt: [1.2, 0.2, 0] },
      { r: 3.6, tilt: [0.4, 1.1, 0.3] },
      { r: 4.1, tilt: [-0.6, 0.5, 1.0] },
    ].forEach(({ r, tilt }) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(r, 0.012, 8, 160), ringMat)
      ring.rotation.set(...tilt)
      core.add(ring)

      // A small satellite riding each ring
      const sat = new THREE.Mesh(
        new THREE.SphereGeometry(0.09, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      )
      ring.add(sat)
      rings.push({ ring, sat, r, speed: 0.3 + Math.random() * 0.4, offset: Math.random() * Math.PI * 2 })
    })

    // Floating geometric shapes around the scene
    const floaters = []
    const floaterGeos = [
      new THREE.OctahedronGeometry(0.35),
      new THREE.TetrahedronGeometry(0.4),
      new THREE.TorusGeometry(0.28, 0.09, 12, 32),
      new THREE.BoxGeometry(0.45, 0.45, 0.45),
    ]
    const floaterCount = isSmall ? 6 : 12
    for (let i = 0; i < floaterCount; i++) {
      const mesh = new THREE.Mesh(
        floaterGeos[i % floaterGeos.length],
        new THREE.MeshStandardMaterial({
          color: 0x1e293b,
          metalness: 0.7,
          roughness: 0.3,
          emissive: i % 2 ? 0x6366f1 : accentRef.current.clone(),
          emissiveIntensity: 0.35,
          flatShading: true,
        })
      )
      mesh.position.set((Math.random() - 0.5) * 22, (Math.random() - 0.5) * 12, -2 - Math.random() * 8)
      scene.add(mesh)
      floaters.push({
        mesh,
        baseY: mesh.position.y,
        speed: 0.3 + Math.random() * 0.6,
        rot: new THREE.Vector3(Math.random(), Math.random(), Math.random()).multiplyScalar(0.01),
      })
    }

    // Particle starfield
    const particleCount = isSmall ? 500 : 1400
    const positions = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 40
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30 - 5
    }
    const particleGeo = new THREE.BufferGeometry()
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const particleMat = new THREE.PointsMaterial({
      color: 0xbae6fd,
      size: 0.045,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    })
    const particles = new THREE.Points(particleGeo, particleMat)
    scene.add(particles)

    // Mouse parallax
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 }
    const onPointerMove = (e) => {
      mouse.tx = (e.clientX / window.innerWidth) * 2 - 1
      mouse.ty = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })

    const onResize = () => {
      const w = mount.clientWidth
      const h = mount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Only animate while visible
    let visible = true
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
    })
    observer.observe(mount)

    const clock = new THREE.Clock()
    let frameId

    const renderFrame = () => {
      const t = clock.getElapsedTime()

      // Blend accent colour toward the current slide
      accentRef.current.lerp(targetColor.current, 0.04)
      shellMat.color.copy(accentRef.current)
      shellPointsMat.color.copy(accentRef.current)
      ringMat.color.copy(accentRef.current)
      innerMat.emissive.copy(accentRef.current)
      keyLight.color.copy(accentRef.current)

      mouse.x += (mouse.tx - mouse.x) * 0.05
      mouse.y += (mouse.ty - mouse.y) * 0.05

      inner.rotation.x = t * 0.25
      inner.rotation.y = t * 0.35
      shell.rotation.y = -t * 0.12
      shell.rotation.z = t * 0.06
      shellPoints.rotation.copy(shell.rotation)
      const pulse = 1 + Math.sin(t * 1.6) * 0.035
      shell.scale.setScalar(pulse)
      shellPoints.scale.setScalar(pulse)

      core.rotation.x = mouse.y * 0.35
      core.rotation.y = mouse.x * 0.5
      core.position.y = (isSmall ? 1.5 : 0.2) + Math.sin(t * 0.8) * 0.2

      rings.forEach(({ sat, r, speed, offset }) => {
        const a = t * speed + offset
        sat.position.set(Math.cos(a) * r, Math.sin(a) * r, 0)
      })

      floaters.forEach((f, i) => {
        f.mesh.rotation.x += f.rot.x
        f.mesh.rotation.y += f.rot.y
        f.mesh.position.y = f.baseY + Math.sin(t * f.speed + i) * 0.4
      })

      particles.rotation.y = t * 0.015
      particles.rotation.x = mouse.y * 0.05

      camera.position.x = mouse.x * 0.8
      camera.position.y = mouse.y * 0.5
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    const animate = () => {
      frameId = requestAnimationFrame(animate)
      if (visible && !document.hidden) renderFrame()
    }

    if (reduceMotion) {
      renderFrame()
    } else {
      animate()
    }

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      scene.traverse((obj) => {
        obj.geometry?.dispose()
        if (obj.material) {
          ;(Array.isArray(obj.material) ? obj.material : [obj.material]).forEach((m) => m.dispose())
        }
      })
      renderer.dispose()
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
}

export default HeroScene
