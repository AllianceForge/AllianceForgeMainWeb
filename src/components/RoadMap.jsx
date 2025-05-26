import phase1Image from "../assets/roadmap-p1.png";
import phase2Image from "../assets/roadmap-p2.png";
import phase3Image from "../assets/roadmap-p3.png";
import phase4Image from "../assets/roadmap-p4.png";
import phase5Image from "../assets/roadmap-p5.png";

const RoadmapSection = () => {
  const milestones = [
    {
      phase: "Phase 1",
      title: "Pioneers Launch",
      description:
        "Kickstarting the Alliance Forge project with foundational mechanics and early player onboarding.",
      image: phase1Image,
    },
    {
      phase: "Phase 2",
      title: "Land Launch",
      description:
        "Introduction of land NFTs with economic and strategic functionalities.",
      image: phase2Image,
    },
    {
      phase: "Phase 3",
      title: "Fleet Upgrade",
      description: "Enhance player fleets with upgraded mechanics and visuals.",
      image: phase3Image,
    },
    {
      phase: "Phase 4",
      title: "Alliance Governance",
      description:
        "Launch of the Alliance governance system, allowing players to vote on district objectives.",
      image: phase4Image,
    },
    {
      phase: "Phase 5",
      title: "Full Alliance Launch",
      description:
        "Complete the Alliance system with collaborative missions and global leaderboards.",
      image: phase5Image,
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-16 bg-gray-900 bg-opacity-90 backdrop-blur-lg rounded-xl text-white"
    >
      <div className="container mx-auto px-6 text-center relative">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
          Roadmap
        </h2>

        {/* Central Timeline */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-cyan-500 h-full"></div>

        {/* Milestones */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-32 md:gap-y-[calc(100px+2.5rem)]">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`relative flex flex-col items-center text-center ${
                index % 2 === 0
                  ? "md:items-end md:pr-8"
                  : "md:items-start md:pl-8"
              }`}
              style={{
                marginTop: index % 2 === 0 ? "50px" : "100px", // Adjust to create varied heights
              }}
            >
              {/* Milestone Icon */}
              <div className="relative w-24 h-24 mb-8">
                <img
                  src={milestone.image}
                  alt={milestone.title}
                  className="w-full h-full object-contain rounded-xl shadow-md"
                />
                {/* Timeline Dot */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-6 h-6 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
              </div>
              {/* Milestone Card */}
              <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg p-6 shadow-lg max-w-sm hover:shadow-cyan-500/50 transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent mb-2">
                  {milestone.phase}
                </h3>
                <h4 className="text-lg font-medium text-blue-400 mb-4">
                  {milestone.title}
                </h4>
                <p className="text-sm text-gray-300">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
