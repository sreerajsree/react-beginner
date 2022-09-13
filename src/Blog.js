import React from "react";
import './App.css';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";


function Blog(){
    return (
      <MDBCard className="my-5 px-5 pb-4">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold text-center mb-5 mt-3">
            Recent Posts
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <MDBRow>
            <MDBCol lg="5">
            <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image" />
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="green-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="utensils" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime placeat facere possimus,
                omnis voluptas assumenda est, omnis dolor repellendus et aut
                officiis debitis.
              </p>
              <p>
                by
                <a href="#!">
                  <strong> Carine Fox</strong>
                </a>
                , 19/08/2018
              </p>
              <a class="btn btn-success btn-md">Read more</a>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="7">
              <a href="#!" className="pink-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="image" className="pr-2" />
                  Lifestyle
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident.
              </p>
              <p>
                by
                <a href="#!">
                  <strong> Carine Fox</strong>
                </a>
                , 14/08/2018
              </p>
              <a class="btn btn-pink btn-md mb-lg-0 mb-4">Read more</a>
            </MDBCol>
            <MDBCol lg="5">
            <div className="view overlay rounded z-depth-2">
                <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(34).jpg" alt="Sample image" />
                <a>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>
            </MDBCol>
          </MDBRow>
          <hr className="my-5" />
          <MDBRow>
            <MDBCol lg="5">
                <div className="view overlay rounded z-depth-2 mb-lg-0 mb-4">
                    <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img (28).jpg" alt="Sample image" />
                    <a>
                        <div className="mask rgba-white-slight"></div>
                    </a>
                </div>
            </MDBCol>
            <MDBCol lg="7">
              <a href="#!" className="indigo-text">
                <h6 className="font-weight-bold mb-3">
                  <MDBIcon icon="suitcase" className="pr-2" />
                  Food
                </h6>
              </a>
              <h3 className="font-weight-bold mb-3 p-0">
                <strong>Title of the news</strong>
              </h3>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia consequuntur magni dolores eos qui ratione
                voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia
                sit amet.
              </p>
              <p>
                by
                <a href="#!">
                  <strong> Carine Fox</strong>
                </a>
                , 11/08/2018
              </p>
              <a class="btn btn-indigo btn-md">Read more</a>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
  
  export default Blog;



