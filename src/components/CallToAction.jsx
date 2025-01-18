function CallToAction() {
      return (
        <div className="cta-section">
          <h2>Get Your Free Quote Now!</h2>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <select>
              <option value="install">Install</option>
              <option value="repair">Repair</option>
            </select>
            <button type="submit">Get Quote</button>
          </form>
        </div>
      );
    }

    export default CallToAction;
