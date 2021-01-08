import React from "react";
import '../styles/dist/index.css';

function MainPage() {
  return (
    <div>
      <div class="container">
        <main class="main container">
          <div class="row">
            <div class="gaming-page col-sm">
              <div class="content-div border">
                <div class="h1-text">
                  <h1 class="content d-flex justify-content-center align-items-center">
                    Play the damn game!!
                  </h1>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <a href="gaming-page">
                    <button class="btn btn-danger">Wanna Play?</button>
                  </a>
                </div>
              </div>
            </div>
            <div class="ranking-page col-sm">
              <div class="content-div border">
                <div class="h1-text">
                  <h1 class="content d-flex justify-content-center align-items-center">
                    Wanna go to Ranking Page?
                  </h1>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                  <a href="ranking-page">
                    <button class="btn btn-primary">Go to Ranking Page</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default MainPage;
