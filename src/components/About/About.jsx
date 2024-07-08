export default function About() {
  return (
    <section class=''>
      <div class='py-12 bg-gray-100'>
        <div class='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div class='lg:text-center'>
            <h2 class='font-heading mb-4 bg-orange-100 text-orange-800 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font'>
              Why choose us?
            </h2>
            <p class='font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 sm:text-4xl'>
              We know tech, we know finance. We are fintech experts.
            </p>
            <p class='mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto'>
            At Perago, we provide a comprehensive suite of software services including custom application development, system integration, and advanced data analytics to meet the unique needs of our clients.

            </p>
          </div>

          <div class='mt-10'>
            <dl class='space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10'>
              <div class='relative'>
                <dt>
                  <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white'>
                    <img src='https://www.svgrepo.com/show/503163/api-settings.svg' />
                  </div>
                  <p class='font-heading ml-16 text-lg leading-6 font-bold text-gray-700'>
                  Diversified Experience in Software Engineering

                  </p>
                </dt>
                <dd class='mt-2 ml-16 text-base text-gray-500'>
                We have hands on consulting and implementation experiences in software development, 
                system analysis, and software quality assurance at national and regional levels.
                </dd>
              </div>
              <div class='relative'>
                <dt>
                  <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white'>
                    <img src='https://www.svgrepo.com/show/503138/webpack.svg' />
                  </div>
                  <p class='font-heading ml-16 text-lg leading-6 font-bold text-gray-700'>
                  Qualified Staff
                  </p>
                </dt>
                <dd class='mt-2 ml-16 text-base text-gray-500'>
                  {' '}
                  Perago houses internationally certified professionals among the few ones in the industry. 
                  This highly dedicated and committed staff are the cornerstones for providing quality products and services to our customers. We also engage subject matter experts to make sure we understand every bit of our customers’ 
                  business processes.
                </dd>
              </div>
              <div class='relative'>
                <dt>
                  <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white'>
                    <img src='https://www.svgrepo.com/show/511771/dashboard-671.svg' />
                  </div>
                  <p class='font-heading ml-16 text-lg leading-6 font-bold text-gray-700'>
                  Customer Focus
                  </p>
                </dt>
                <dd class='mt-2 ml-16 text-base text-gray-500'>
                  {' '}
                  We foster close relationships, rooted in trust and respect, with our customers, 
                  so we can understand face together the everyday challenge of tying the evolving information technology with their business goals.
                </dd>
              </div>
              <div class='relative'>
                <dt>
                  <div class='absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white'>
                    <img src='https://www.svgrepo.com/show/76267/free-commercial-label.svg' />
                  </div>
                  <p class='font-heading ml-16 text-lg leading-6 font-bold text-gray-700'>
                  Awareness of all stakeholders

                  </p>
                </dt>
                <dd class='mt-2 ml-16 text-base text-gray-500'>
                  {' '}
                  We engage all stakeholders in every phase of our project life cycle in order to get the confidence of users and to ensure the solutions are put into service.


                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}