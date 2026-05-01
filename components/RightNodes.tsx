'use client'
import { useEffect, useRef } from 'react'

const NODE_COLOR = '#22d3ee'
const MAX_NODES = 40
const SPAWN_INTERVAL_MS = 700
const CONNECTION_DISTANCE = 130
const NODE_SPEED = 0.12
const NODE_RADIUS = 2
const FADE_IN_RATE = 0.008
const FADE_OUT_FRAMES = 70
const MIN_LIFE = 600
const MAX_LIFE = 1400

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  life: number
}

export default function RightNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodes: Node[] = []
    let animationId: number
    let spawnTimer: ReturnType<typeof setInterval>

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const spawnNode = () => {
      if (nodes.length >= MAX_NODES) return
      const angle = Math.random() * Math.PI * 2
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.cos(angle) * NODE_SPEED * (0.5 + Math.random()),
        vy: Math.sin(angle) * NODE_SPEED * (0.5 + Math.random()),
        opacity: 0,
        life: MIN_LIFE + Math.floor(Math.random() * (MAX_LIFE - MIN_LIFE)),
      })
    }

    for (let i = 0; i < 10; i++) spawnNode()
    spawnTimer = setInterval(spawnNode, SPAWN_INTERVAL_MS)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        node.life--
        if (node.life < FADE_OUT_FRAMES) {
          node.opacity = node.life / FADE_OUT_FRAMES
        } else {
          node.opacity = Math.min(1, node.opacity + FADE_IN_RATE)
        }
      }

      nodes = nodes.filter(n => n.life > 0)

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECTION_DISTANCE) {
            const pairOpacity = Math.min(nodes[i].opacity, nodes[j].opacity)
            const alpha = (1 - dist / CONNECTION_DISTANCE) * 0.25 * pairOpacity
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(34,211,238,${alpha})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      ctx.fillStyle = NODE_COLOR
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, NODE_RADIUS, 0, Math.PI * 2)
        ctx.globalAlpha = node.opacity * 0.5
        ctx.fill()
      }
      ctx.globalAlpha = 1

      animationId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animationId)
      clearInterval(spawnTimer)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 right-0 h-full pointer-events-none hidden md:block"
      style={{ width: '38%' }}
    />
  )
}
