function Body(){
    return(
        <main>
            <div className="capitalize font-extrabold text-4xl">
                The Bright Future of Web 3.0?
            </div>
            <article>
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people, But is it really fulfilling its promise?
            </article>
            <button className="py-4 px-8 text-white items-center justify-center my-2 bg-orange-500">
                READ MORE
            </button>

            <section className="bg-black text-white p-6 my-3">
                <h1 className="text-orange-700 font-extrabold text-4xl">NEW</h1>
                <div className="flex flex-col divide-y-2">
                <div className="my-3">
                    <p className="capitalize">hydrogen VS electric cars</p>
                    <div>take one</div>
                </div>
                <div className="my-3">
                    <p className="capitalize">the downsides of AI artistry</p>
                    <div>What are the possible adverse effects of on demand AI image generators?</div>
                </div>
                <div className="my-2">
                    <p className="capitalize">is VC funding drying up?</p>
                    <div>Private funding by VC firms is down 50% YOY. We take a look at what that means</div>
                </div>
                </div>
            </section>

            <section className="flex flex-col gap-8">
                <div>
                    <img src="/image-retro-pcs.jpg" alt="retropcs" />
                    <div>
                        <p className="">01</p>
                        <p className="">Reviving Retro PCs</p>
                        <p className=""></p>
                    </div>
                </div>
                <div>
                    <img src="/image-top-laptops.jpg" alt="toplaptops" />
                    <div>
                        <p className="">02</p>
                        <p className="capitalize text-black font-bold text-lg">Top 10 Laptops of 2022</p>
                        <p className=""></p>
                    </div>
                </div>
                <div>
                    <img src="/image-gaming-growth.jpg" alt="gamegrow" />
                    <div>
                        <p className="">03</p>
                        <p className="capitalize text-black font-bold text-lg">the growth of gaming</p>
                        <p className="">How the pandemic has sparked fresh opportunities.</p>
                    </div>
                </div>
                
            </section>
        </main>
    )
}

export default Body;