const News = () =>{
    return(
        <div className="main">
            <div class="basicText">
                <h3>News & Views</h3>
                <p>Our latest youth engagement events and stories.</p>
            </div>
            <div class="row">
                <div class="column">
                    <img/>
                    <h3>Title</h3>
                    <br/>
                    <p>
                        News description 1
                    </p>
                    <button type="button">LEARN MORE</button>
                </div>

                <div class="column">
                    <img/>
                    <h3>Title</h3>
                    <br/>
                    <p>
                        News description 2
                    </p>
                    <button type="button">LEARN MORE</button>
                </div>

                <div class="column">
                    <img/>
                    <h3>Title</h3>
                    <br/>
                    <p>
                        News description 3
                    </p>
                    <button type="button">LEARN MORE</button>
                </div>
            </div>
        </div>
    )
}

export default News