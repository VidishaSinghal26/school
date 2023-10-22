import React from 'react'
import '../styles/NewEvent.css'

export default function NewEvents() {
  return (
    <div className='hs-sec4'>
         <section className='section1'>
        <div class="leftBox">
            <div class="content">
                <h1>
                    News And Events
                </h1>
                <p>
                    From articles on
                    various computer science subjects
                    to programming problems for practice,
                    from basic to premium courses, from
                    technologies to entrance examinations,
                    we have been building ample content
                    with superior quality. In a short
                    span, we have built a community of tech
                    giants. Our vision is to build a gigantic
                    network of geeks and we are only a
                    fraction of it yet.
                </p>
            </div>
        </div>
        <div class="events">
            <ul>
                <li>
                    <div class="time">
                        <h2>
                            15 <br /><span>August</span>
                        </h2>
                    </div>
                    <div class="details">
                        <h3>
                            Independence Day
                        </h3>
                        <p>
                            Whether programming
                            excites you or you feel stifled.
                        </p>
                        <a href="#">View Details</a>
                    </div>
                    <div style={{clear:'none'}}></div>
                </li>
                <li>
                    <div class="time">
                        <h2>
                            26 <br /><span>Jan</span>
                        </h2>
                    </div>
                    <div class="details">
                        <h3>
                            Republic Day
                        </h3>
                        <p>
                            Whether programming
                            excites you or you feel stifled.
                        </p>
                        <a href="#">View Details</a>
                    </div>
                    <div style={{clear: 'both'}}></div>
                </li>
                <li>
                    <div class="time">
                        <h2>
                            2 <br /><span>October</span>
                        </h2>
                    </div>
                    <div class="details">
                        <h3>
                            Where is the event happening?
                        </h3>
                        <p>
                            Whether programming
                            excites you or you feel stifled,
                            how to ace data structures and
                            algorithms, GeeksforGeeks is a
                            one-stop solution.
                        </p>
                        <a href="#">View Details</a>
                    </div>
                    <div style={{clear: 'both'}}></div>
                </li>
            </ul>
        </div>
    </section>
    </div>
  )
}
