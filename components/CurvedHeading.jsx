"use client"

import { useEffect, useRef, useState } from "react"

export default function CurvedHeading({
  text = "Annual Family Pass",
  className = "boogaloo bg-gradient-to-br from-neutral-50 to-amber-100 bg-clip-text text-transparent relative text-9xl text-white font-bold z-10",
  arcHeight = 100,
  width = 1000,
}) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [svgWidth, setSvgWidth] = useState(width)
  const id = `curved-text-path-${Math.random().toString(36).substring(2, 9)}`

  useEffect(() => {
    const updateSize = () => {
      if (svgRef.current) {
        const containerWidth = svgRef.current.parentElement?.clientWidth || width
        setSvgWidth(containerWidth)
      }
    }

    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [width])

  // Calculate the path for the text to follow (a simple arc)
  const pathData = `M 0,${arcHeight} Q ${svgWidth / 2},0 ${svgWidth},${arcHeight}`

  return (
    <div className="w-full overflow-hidden">
      <svg
        ref={svgRef}
        width="100%"
        height={arcHeight * 2 + 20}
        viewBox={`0 0 ${svgWidth} ${arcHeight * 2 + 20}`}
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <defs>
          <path id={id} d={pathData} fill="none" />
        </defs>
        <text className={className} textAnchor="middle" dominantBaseline="middle">
          <textPath href={`#${id}`} startOffset="50%">
            {text}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

