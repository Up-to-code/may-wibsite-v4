"use client";

import { useEffect, Suspense, lazy } from "react";
import Container from "../public_components/Container";
import { db } from "@/app/Firebase/db";
import { collection, getDocs } from "firebase/firestore";
import { useSkills } from "@/app/Store/Skills_Store";

const LazySkill = lazy(() => import("./Skill"));

function Skills() {
  const { skills, setAllSkills } = useSkills();

  useEffect(() => {
    const getSkills = async () => {
      if (skills.length === 0) {
        try {
          const querySnapshot = await getDocs(collection(db, "Skiles"));
          const skillsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setAllSkills(skillsData);
        } catch (error) {
          console.error("Error fetching skills:", error);
        }
      }
    };
    getSkills();
  }, [skills.length, setAllSkills]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center py-16">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-4">My Skills</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore the technologies and tools {"I've "}mastered on my journey as a developer.
          </p>
        </div>

        <Suspense fallback={<SkillsSkeleton />}>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="transition-transform duration-300 hover:scale-105 transform shadow-md hover:shadow-2xl rounded-lg overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <LazySkill sk={skill.Skile} />
              </div>
            ))}
          </div>
        </Suspense>
      </Container>
    </div>
  );
}

function SkillsSkeleton() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className="bg-gray-700 h-16 rounded-lg animate-pulse shadow-md"
        ></div>
      ))}
    </div>
  );
}

export default Skills;
