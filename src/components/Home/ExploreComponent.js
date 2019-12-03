/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/
//teste

import React from "react";
import { NavLink } from "react-router-dom";

const ExploreComponent = () => (
  <div data-aos='zoom-in' data-aos-duration='3000' className='explore'>
    <NavLink to='/Products'>
      <svg width={396} height={130} viewBox='0 0 600 130'>
        <defs>
          <filter
            id='a'
            x={24}
            y={23}
            width={372}
            height={107}
            filterUnits='userSpaceOnUse'
          >
            <feOffset dy={3} input='SourceAlpha' />
            <feGaussianBlur stdDeviation={3} result='b' />
            <feFlood floodOpacity={0.8} />
            <feComposite operator='in' in2='b' />
            <feComposite in='SourceGraphic' />
          </filter>
          <linearGradient
            id='c'
            x1={1}
            y1={0.58}
            x2={0}
            y2={0.58}
            gradientUnits='objectBoundingBox'
          >
            <stop offset={0} stopColor='#61AB49' />
            <stop offset={1} stopColor='#044C22' />
          </linearGradient>
          <filter
            id='d'
            x={0}
            y={0}
            width={372}
            height={107}
            filterUnits='userSpaceOnUse'
          >
            <feOffset dy={3} input='SourceAlpha' />
            <feGaussianBlur stdDeviation={3} result='e' />
            <feFlood floodOpacity={0.8} />
            <feComposite operator='in' in2='e' />
            <feComposite in='SourceGraphic' />
          </filter>
        </defs>
        <g transform='translate(9 6)'>
          <g className='h' transform='matrix(1, 0, 0, 1, -9, -6)'>
            <g className='a' transform='translate(33 29)'>
              <rect className='e' width={354} height={89} rx={3} />
              <rect
                className='f'
                x={0.5}
                y={0.5}
                width={353}
                height={88}
                rx={2.5}
              />
            </g>
          </g>
          <g className='g' transform='matrix(1, 0, 0, 1, -9, -6)'>
            <rect
              className='b'
              width={354}
              height={89}
              rx={3}
              transform='translate(9 6)'
            />
          </g>
          <text className='c' transform='translate(47 63)'>
            <tspan x={0} y={-2}>
              {"EXPLORE"}
            </tspan>
          </text>
          <path
            className='d'
            d='M13.395,4.7l1.561-1.561a1.681,1.681,0,0,1,2.384,0L31.008,16.8a1.681,1.681,0,0,1,0,2.384L17.339,32.857a1.681,1.681,0,0,1-2.384,0L13.395,31.3a1.689,1.689,0,0,1,.028-2.412L21.9,20.813H1.688A1.683,1.683,0,0,1,0,19.125v-2.25a1.683,1.683,0,0,1,1.688-1.687H21.9L13.423,7.116A1.677,1.677,0,0,1,13.395,4.7Z'
            transform='translate(275 29)'
          />
        </g>
      </svg>
    </NavLink>
  </div>
);

export default ExploreComponent;
