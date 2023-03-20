import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <div class="card text-bg-dark border-0">
                <img src="/assets/bg.jpg" class="card-img" alt="Background" />
                <div class="card-img-overlay d-flex flex-column justify-content-center">
                    <h5 class="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
                    <p class="card-text laed fs-2">
                        ALL THE TRENDS
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Home;