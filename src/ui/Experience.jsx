import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import CanvasLoader from '../components/CanvasLoader';
import Developer from '../components/Developer';
import { workExperiences } from '../constants';

function Experience() {
  const [animationName, setAnimationName] = useState();

  return (
    <section id="experience" className="c-space my-20">
      <div className="w-full text-white-600">
        <div className='flex gap-4 items-center'>
          <h3 className="head-text">My work experience</h3>
          <p className="text-white-500 md:text-base text-sm">
            It&apos;s imaginary career to show you the 3d animations
          </p>
        </div>

        <div className="work-container">
          <div className="work-canvas">
            <Canvas>
              <ambientLight intensity={3} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer
                  position-y={-3}
                  scale={3}
                  animationName={animationName}
                />
              </Suspense>
            </Canvas>
          </div>

          <div className="work-content">
            <div className="sm:py-10 py-5 sm:px-5 px-2.5">
              {workExperiences.map(
                ({ id, name, pos, duration, icon, animation, title }) => (
                  <div
                    key={id}
                    className="work-content_container group"
                    onClick={() => setAnimationName(animation.toLowerCase())}
                    onPointerOver={() =>
                      setAnimationName(animation.toLowerCase())
                    }
                    onPointerOut={() => setAnimationName('idle')}
                  >
                    <div className="flex flex-col items-center justify-start py-2 h-full">
                      <div className="work-content_logo">
                        <img src={icon} alt="logo" className="w-full h-full" />
                      </div>
                      <div className="work-content_bar" />
                    </div>
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{name}</p>
                      <p className="text-sm mb-5">
                        {pos} -- {duration}
                      </p>
                      <p className="group-hover:text-white transition ease-in-out duration-500">
                        {title}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
