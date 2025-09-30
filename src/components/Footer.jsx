import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter + Contact Row */}
        <div className="top-row">
          <div className="newsletter">
            <h3>BE THE FIRST TO KNOW</h3>
            <p>Sign up for updates from mettā muse.</p>
            <div className="newsletter-input">
              <input placeholder="Enter your e-mail..." />
              <button>SUBSCRIBE</button>
            </div>
          </div>

          <div className="contact">
            <h3>CONTACT US</h3>
            <p>+91 9211335360</p>
            <p>customercare@sekharstore.com</p>
            <h3 style={{ marginTop: "16px" }}>CURRENCY</h3>
            <p>IND Rs</p>
            <small>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </small>
          </div>
        </div>

        <hr className="divider" />

        {/* Links + Social + Payments */}
        <div className="bottom-row">
          <div>
            <h3>SEKHAR STORE</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
          </div>

          <div>
            <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <span className="social-icons-card"><img src="https://i.pinimg.com/1200x/0d/16/e7/0d16e71ec3ede2773ef3ef1f98e2126a.jpg" alt="instagram" className="social-icon"/> Instagram</span>
              <span className="social-icons-card"><img src="https://i.pinimg.com/1200x/2b/e7/ce/2be7cee4fe404b8fa86d31d139fab757.jpg" alt="linkedin" className="social-icon"/>LinkedIn</span>
            </div>

            <h3 style={{ marginTop: "20px" }}>SEKHAR STORE ACCEPTS</h3>
            <div className="payments">
              <img src="https://i.pinimg.com/736x/8e/96/4a/8e964acb09cf1a65fceb42c6495531a5.jpg" alt="GPay" />
              <img src="https://i.pinimg.com/1200x/67/c9/b2/67c9b2d8573fddad0aa5a00c62d66ec3.jpg" alt="Mastercard" />
              <img src="https://i.pinimg.com/736x/df/4c/bd/df4cbdd37f061e764e3d8ee1b4d0debd.jpg" alt="PayPal" />
              <img src="https://i.pinimg.com/1200x/bf/52/b8/bf52b87c9c500e5502da41ccb04c9ef1.jpg" alt="Amex" />
              <img src="https://i.pinimg.com/1200x/62/ea/3d/62ea3d5e58425fd41319d6d0b64c673f.jpg" alt="Apple Pay" />
              <img src="https://i.pinimg.com/1200x/67/c8/7d/67c87d420f58c250b3b7aecb034350b6.jpg" alt="UPI" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          Copyright © 2025 SEKHAR STORE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
