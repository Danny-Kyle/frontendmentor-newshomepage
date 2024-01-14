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
                <div>
                    <p>01</p>
                    <div>take one</div>
                </div>
                <div>
                    <p>02</p>
                    <div>take two</div>
                </div>
                <div>
                    <p>03</p>
                    <div>take three</div>
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