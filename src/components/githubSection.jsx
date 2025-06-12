import GitHubCalendar from "react-github-calendar";

const GitHubStreakSection = () => {
  const customTheme = {
    dark: ["#0D1117", "#144879", "#1f65a6", "#3396f5", "#66ccff"],
  };

  return (
    <section
      id="contributions"
      className="py-8 md:py-16 bg-gradient-to-br from-[#0D1117] via-[#0B1A2E] to-[#0D1117] text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            GitHub Contribution Streak
          </h2>
          <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto leading-relaxed">
            My open-source activity and consistency over time.
          </p>
        </div>

        {/* Calendar Container */}
        <div className="w-full max-w-full">
          <div className="rounded-xl border border-blue-800/50 bg-[#161B22] shadow-xl p-3 md:p-6 backdrop-blur-sm">
            {/* Mobile: Scrollable container */}
            <div className="block md:hidden">
              <div className="overflow-x-auto pb-2">
                <div className="min-w-[800px]">
                  <GitHubCalendar
                    username="bhatiaarpit"
                    theme={customTheme}
                    colorScheme="dark"
                    hideColorLegend={false}
                    showWeekdayLabels
                    fontSize={12}
                    blockSize={10}
                    blockMargin={2}
                  />
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2 italic">
                Scroll horizontally to view full calendar
              </p>
            </div>

            {/* Desktop: Full width container */}
            <div className="hidden md:block">
              <GitHubCalendar
                username="bhatiaarpit"
                theme={customTheme}
                colorScheme="dark"
                hideColorLegend={false}
                showWeekdayLabels
                fontSize={14}
                blockSize={12}
                blockMargin={3}
              />
            </div>
          </div>

          {/* Additional Stats (Optional Enhancement) */}
          <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-[#161B22] border border-blue-800/30 rounded-lg p-4">
              <div className="text-lg md:text-xl font-bold text-blue-400">365+</div>
              <div className="text-xs md:text-sm text-gray-400">Days Active</div>
            </div>
            <div className="bg-[#161B22] border border-blue-800/30 rounded-lg p-4">
              <div className="text-lg md:text-xl font-bold text-green-400">1.2k+</div>
              <div className="text-xs md:text-sm text-gray-400">Contributions</div>
            </div>
            <div className="bg-[#161B22] border border-blue-800/30 rounded-lg p-4">
              <div className="text-lg md:text-xl font-bold text-purple-400">50+</div>
              <div className="text-xs md:text-sm text-gray-400">Repositories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubStreakSection;