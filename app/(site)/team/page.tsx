import SidebarLink from "@/components/Team/SidebarLink";

export default function TeamsPage() {
  return (
    <>
      <title>Team - Startup</title>

      <section className="pb-16 md:pb-20 lg:pb-24 pt-24 md:pt-28 lg:pt-32">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] p-4 bg-[#e9edf0] rounded-3xl transition-all dark:border-strokedark dark:bg-blacksection">
                <ul className="space-y-2">
                  <SidebarLink />
                </ul>
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs rounded-3xl bg-[#e9edf0] py-11 px-8 dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                <h1>Our Team</h1>

                <p className="text-base text-body-color text-2xl font-normal dark:text-body-color-dark">
                  Our team is united by a shared vision and unwavering passion
                  for innovation. This common drive fuels our collaborative
                  efforts to push boundaries, co-create transformative
                  solutions, and bring our clients' aspiration to life.
                </p>
              

                {/* Team Member Cards Section */}
                <div className="flex flex-wrap -mx-4 mt-8">
                  {/* Team Member 1 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <img
                        src="/images/blog/blog-02.png"
                        alt="Team Member 1"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium">Mwangilwa ZImba</h3>
                      <p className="text-gray-500">CEO</p>
                    </div>
                  </div>

                  {/* Repeat similar code for other team members */}
                  {/* Team Member 2 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <img
                        src="/images/blog/blog-02.png"
                        alt="Team Member 1"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium">Nitesh Kumar</h3>
                      <p className="text-gray-500">Software Dev</p>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-2">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <img
                        src="/images/blog/blog-02.png"
                        alt="Team Member 1"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium">Chileshe Kampa</h3>
                      <p className="text-gray-500">IT Support</p>
                    </div>
                  </div>

                  {/* Team Member 3 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-2">
                    <div className="bg-white rounded-3xl shadow-lg p-6">
                      <img
                        src="/images/blog/blog-02.png"
                        alt="Team Member 1"
                        className="w-full h-auto rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-medium">Nixon Ndunda</h3>
                      <p className="text-gray-500">IT Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
