"use client";
import React, { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import {
  ChevronDown,
  ChevronRight,
  Leaf,
  Package,
  Shield,
  Users,
  CheckCircle,
  Info,
} from "lucide-react";

// Globe Background Component
const GlobeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      30,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      100000
    );
    camera.position.set(0, 0, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const geometry = new THREE.SphereGeometry(1, 128, 64);
    const material = new THREE.MeshPhongMaterial({
      color: 0xf2f9f2,
      shininess: 100,
    });

    const globe = new THREE.Mesh(geometry, material);
    globeGroup.add(globe);

    const dotsGroup = new THREE.Group();
    globeGroup.add(dotsGroup);

    const dotGeometry = new THREE.SphereGeometry(0.006, 12, 12);
    const dotMaterial = new THREE.MeshBasicMaterial({
      color: 0x66bb6a,
      transparent: true,
      opacity: 1,
    });

    const dotCount = 400;
    for (let i = 0; i < dotCount; i++) {
      const dot = new THREE.Mesh(dotGeometry, dotMaterial);
      const phi = Math.acos(-1 + (2 * i) / dotCount);
      const theta = Math.sqrt(dotCount * Math.PI) * phi;
      const radius = 1.02;
      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);
      dot.position.set(x, y, z);
      dotsGroup.add(dot);
    }

    globeGroup.position.set(1.2, -1.2, 0);

    scene.add(new THREE.AmbientLight(0xe8f5e8, 0.4));
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    const backLight = new THREE.DirectionalLight(0xa5d6a7, 0.3);
    backLight.position.set(-5, -3, -5);
    scene.add(backLight);

    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;
      globeGroup.rotation.y += 0.0025;
      globeGroup.rotation.x = Math.sin(time * 0.15) * 0.1;
      globeGroup.rotation.z = Math.cos(time * 0.1) * 0.05;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 w-full h-full opacity-70 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

// Main Component
const Usageguide = () => {
  const [activeSection, setActiveSection] = useState("introduction");
  const [expandedFAQ, setExpandedFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: <Info className="w-10 h-10" /> },
    { id: "features", title: "Product Features", icon: <CheckCircle className="w-10 h-10" /> },
    { id: "usage", title: "How to Use", icon: <Package className="w-10 h-10" /> },
    { id: "care", title: "Care & Storage", icon: <Shield className="w-10 h-10" /> },
    { id: "environmental", title: "Environmental Impact", icon: <Leaf className="w-10 h-10" /> },
    { id: "faq", title: "FAQ", icon: <Users className="w-10 h-10" /> },
  ];

  const faqs = [
    {
      question: "What is a purun polybag and how is it made?",
      answer: "Purun polybags are eco-friendly bags made from woven fibers of the purun plant (Eleocharis dulcis) coated with biodegradable material.",
    },
    {
      question: "How long does a purun polybag last?",
      answer: "They typically last 6–12 months depending on storage and usage.",
    },
    {
      question: "Are purun polybags waterproof?",
      answer: "They resist splashes but are not fully waterproof.",
    },
    {
      question: "How should I dispose of a damaged purun polybag?",
      answer: "They are compostable and will decompose naturally in 3–6 months.",
    },
    {
      question: "Are purun polybags safe for food?",
      answer: "Yes, they're made from natural, food-safe materials.",
    },
  ];

  const content = {
    introduction: (
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4 text-green-900">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          Welcome to the user guide for the purun polybag! This guide will help you understand its features, usage, and eco-benefits.
        </p>
      </div>
    ),
    features: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-green-900">Product Features</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
          <li>Made from purun (Eleocharis dulcis), a natural swamp plant.</li>
          <li>Biodegradable and environmentally friendly.</li>
          <li>Handwoven by South Kalimantan artisans.</li>
          <li>Durable and food-safe coated.</li>
        </ul>
      </>
    ),
    usage: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-green-900">How to Use</h2>
        <p className="text-gray-700 mb-2">Use like a regular bag: for planting, packing, or shopping. Avoid sharp/heavy items.</p>
      </>
    ),
    care: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-green-900">Care & Storage</h2>
        <ul className="list-disc ml-6 text-gray-700 space-y-2 leading-relaxed">
          <li>Store dry, away from humidity.</li>
          <li>Avoid direct sun exposure.</li>
          <li>Let it dry fully if wet before reuse.</li>
        </ul>
      </>
    ),
    environmental: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-green-900">Environmental Impact</h2>
        <p className="text-gray-700 mb-2">Reduces plastic use. Made from renewable purun. Decomposes naturally.</p>
      </>
    ),
    faq: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-green-900">FAQ</h2>
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-green-100 p-4 rounded-lg shadow-sm bg-white/90 backdrop-blur-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex items-center justify-between w-full text-left font-semibold text-gray-800 hover:text-green-700"
              >
                {faq.question}
                {expandedFAQ === index ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
              {expandedFAQ === index && (
                <p className="mt-2 text-gray-700 leading-relaxed">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </>
    ),
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-30" preserveAspectRatio="none" viewBox="0 0 800 600">
        <defs>
          <radialGradient id="greenGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#d1fae5" stopOpacity="1" />
            <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle fill="url(#greenGradient)" cx="150" cy="150" r="120" />
        <circle fill="url(#greenGradient)" cx="700" cy="100" r="80" />
        <circle fill="url(#greenGradient)" cx="400" cy="500" r="160" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 mt-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-green-900 mb-2">Purun Polybag Usage Guide</h1>
          <p className="text-green-700 opacity-80">Sustainable packaging solutions from Central Kalimantan</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-1/4 space-y-2 bg-white/80 backdrop-blur p-6 rounded-xl shadow-lg border border-green-100">
            <h3 className="font-semibold text-green-900 mb-4 text-sm uppercase tracking-wide">Navigation</h3>
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center w-full px-4 py-3 rounded-lg text-left transition ${
                  activeSection === section.id
                    ? "bg-green-100 text-green-900 font-semibold shadow-sm border-l-4 border-green-500"
                    : "bg-white/60 text-gray-700 hover:bg-green-50 hover:text-green-800"
                }`}
              >
                <span className="mr-3 opacity-70">{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </aside>

          <main className="relative lg:w-3/4 bg-white/85 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none">
              <GlobeBackground />
            </div>
            <div className="relative z-10">{content[activeSection]}</div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Usageguide;
