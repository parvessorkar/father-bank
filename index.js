const allcatagory =async () => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
  const data = await res.json();
  const allcatagoryArray = data.data.news_category.slice(0, 3);
  const addinside = document.getElementById('tab-container');

  allcatagoryArray.forEach((eachcatagory) => {
    const div = document.createElement('div');
    div.innerHTML = `<a onclick="newscatagory('${eachcatagory. category_id}')" class="tab">${eachcatagory. category_name}</a>`
    addinside.appendChild(div)
  })
  // console.log(allcatagoryArray)
}

const newscatagory = async (id) => {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/category/${id}`);
  const data = await res.json();
  const newsarry = data.data;
  const newsadd = document.getElementById('news-container');
  newsadd.textContent = '';
  newsarry.forEach((eachNews) => {
    // console.log(eachNews)
    const div = document.createElement('div');
    div.innerHTML = ` <div class="card w-96 bg-base-100 shadow-xl">
                <figure>
                  <img
                    src="${eachNews?.image_url}"
                    alt="Shoes"
                  />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">
                    Biden Pledges Nearly $3 Billion To Ukraine
                    <div class="badge badge-secondary p-5">Excellent</div>
                  </h2>
                  <p>
                    Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro,
                    Europe, Joe Biden,
                  </p>
                  <div class="card-footer flex justify-between mt-8">
                    <div class="flex">
                      <div>
                        <div class="avatar online">
                          <div class="w-14 rounded-full">
                            <img
                              src="${eachNews?.author?.img}"
                            />
                          </div>
                        </div>
                      </div>
                      <div>
                        <h6>${eachNews?.author.name}</h6>
                        <small>2022-08-24 17:27:34</small>
                      </div>
                    </div>
                    <div class="card-detaild-btn">
                      <button onclick="showdetails('${eachNews?.category_id}')"
                        class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </div>
         </div> 
    `
    newsadd.appendChild(div)
    
  })
  
} 
const showdetails =async (id) => {
  const res = await fetch(` https://openapi.programming-hero.com/api/news/${id}`);
  const data = await res.json();
  const detailsarry = data.data;
  console.log(data)
}
allcatagory()
newscatagory('01')