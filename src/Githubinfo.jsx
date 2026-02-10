import { useEffect, useState } from "react";


export default function GithubInfo() {
  const [gitProfile, setGitProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getGitData() {
      try {
        const cached = localStorage.getItem("githubData");
        if (cached) {
          const { profile, repos } = JSON.parse(cached);
          setGitProfile(profile);
          setRepos(repos);
          setLoading(false);
          return;
        }

        const profileRes = await fetch(
          "https://api.github.com/users/ED-EMERUWA"
        );
        const reposRes = await fetch(
          "https://api.github.com/users/ED-EMERUWA/repos?per_page=100"
        );

        if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API error");

        const profileData = await profileRes.json();
        const reposData = await reposRes.json();

        setGitProfile(profileData);
        setRepos(reposData);
        setLoading(false);

        console.log("GitHub data fetched:", { profileData, reposData });

        localStorage.setItem(
          "githubData",
          JSON.stringify({ profile: profileData, repos: reposData })
        );
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    getGitData();
  }, []);

  // Compute stats
  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const languages = {};
  repos.forEach(r => {
    if (r.language) languages[r.language] = (languages[r.language] || 0) + 1;
  });

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto p-6 animate-pulse flex flex-col md:flex-row gap-8">
        <div className="flex-1 space-y-4">
          <div className="h-6 w-40 bg-gray-200 rounded-full" />
          <div className="h-8 w-64 bg-gray-200 rounded-md" />
          <div className="h-4 w-48 bg-gray-200 rounded-md" />
          <div className="h-32 bg-gray-200 rounded-md" />
        </div>
        <div className="flex-1 space-y-4">
          <div className="h-24 bg-gray-200 rounded-md" />
          <div className="h-24 bg-gray-200 rounded-md" />
          <div className="h-24 bg-gray-200 rounded-md" />
        </div>
      </div>
    );
  }

  if (error) return <p className="text-red-500">{error}</p>;

 return (
  <section className="max-w-7xl mx-auto bg-c1 py-16 px-6 shadow-2xl">
    <div className="flex flex-col md:flex-row gap-12">
      {/* Profile Section - Left Sidebar */}
      <div className="md:w-80 flex flex-col items-center md:items-start">
        <div className="relative">
          <img
            src={gitProfile.avatar_url}
            alt={gitProfile.login}
            className="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-c4 shadow-2xl"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-transparent via-white/5 to-white/20 pointer-events-none"></div>
        </div>
        <div className="mt-6 w-full text-center md:text-left">
          <h2 className="text-3xl font-bold text-textPrimary">{gitProfile.name || gitProfile.login}</h2>
          <p className="text-xl text-textSecondary font-light mt-2">@{gitProfile.login}</p>
        </div>
      </div>

      {/* Languages Section - Main Content */}
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-textPrimary mb-8 pb-4 border-b-2 border-c3">
          Most Used Languages
        </h3>
        
        {/* Grid Layout for Language Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
          {[
            { name: "JavaScript", percent: 85, bg: "bg-c2" },
            { name: "TypeScript", percent: 80, bg: "bg-cmid" },
            { name: "React", percent: 75, bg: "bg-c3" },
            { name: "HTML", percent: 70, bg: "bg-c2" },
            { name: "CSS", percent: 70, bg: "bg-cmid" },
            { name: "Node.js", percent: 65, bg: "bg-c3" },
            { name: "Python", percent: 50, bg: "bg-c2" },
          ].map((lang) => (
            <div 
              key={lang.name} 
              className="relative bg-white border-2 border-c4 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Language Name + Percentage */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xl font-bold text-textPrimary">{lang.name}</span>
                  <span className="text-lg text-white font-semibold bg-c3 px-4 py-1 rounded-lg">
                    {lang.percent}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-c1 h-4 rounded-full overflow-hidden border border-c4">
                  <div
                    className={`${lang.bg} h-full transition-all duration-1000 ease-out relative`}
                    style={{ width: `${lang.percent}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* API Notice */}
    <p className="mt-12 text-sm text-textSecondary text-center border-t-2 border-c3 pt-6">
      This is a dynamic section rendered by a RESTful API call and cached to the browser
    </p>
  </section>
);
}

  {/* "login": "ED-EMERUWA",
  "id": 159177381,
  "node_id": "U_kgDOCXzapQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/159177381?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ED-EMERUWA",
  "html_url": "https://github.com/ED-EMERUWA", */}
 