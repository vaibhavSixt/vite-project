import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '30px' }}>
        {/* Replace with actual photo path or URL */}
        <img
          src="https://media.licdn.com/dms/image/v2/D5603AQEpfHEd0-pRLA/profile-displayphoto-shrink_200_200/B56ZSmgev2GoAY-/0/1737960320741?e=1751500800&v=beta&t=cQUKM4UxsHA9WNQKiOXfp_LhTaeC07sf7xuhD2RRVyY" // Replace with the actual path after downloading the image from the LinkedIn profile or use a publicly hosted URL. Directly linking to LinkedIn images is often unreliable.
          alt="Portfolio Owner"
          style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '10px', border: '3px solid green' }} // Added green border to image
        />
        <h1 style={{ color: 'green' }}>Your Name</h1> {/* Replace with actual name, changed color to green */}
      </header>

      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'green' }}>About Me</h2> {/* Changed color to green */}
        <p>
          {/* Replace with actual description */}
          This is a brief description about myself. I am passionate about [Your Field/Interests] and have experience in [Key Skills]. I enjoy solving complex problems and creating innovative solutions.
        </p>
      </section>

      <section>
        <h2 style={{ color: 'green' }}>Experience</h2> {/* Changed color to green */}
        {/* Replace with actual experience details */}
        <div style={{ marginBottom: '20px', borderLeft: '3px solid green', paddingLeft: '15px' }}> {/* Changed border color to green */}
          <h3 style={{ color: 'green' }}>Current Job Title - Company Name</h3> {/* Changed color to green */}
          <p><em>Month Year - Present</em></p>
          <ul>
        <li>Responsibility or achievement 1.</li>
        <li>Responsibility or achievement 2.</li>
        <li>Key project or contribution.</li>
          </ul>
        </div>
        <div style={{ marginBottom: '20px', borderLeft: '3px solid green', paddingLeft: '15px' }}> {/* Changed border color to green */}
          <h3 style={{ color: 'green' }}>Previous Job Title - Previous Company Name</h3> {/* Changed color to green */}
          <p><em>Month Year - Month Year</em></p>
          <ul>
        <li>Responsibility or achievement 1.</li>
        <li>Responsibility or achievement 2.</li>
          </ul>
        </div>
        {/* Add more experience items as needed */}
      </section>

      {/* Optional: Add sections for Projects, Skills, Education etc. */}
      {/*
      <section style={{ marginBottom: '30px' }}>
        <h2 style={{ color: 'green' }}>Projects</h2> // Changed color to green
        // Project details here
      </section>

      <section>
        <h2 style={{ color: 'green' }}>Skills</h2> // Changed color to green
        // Skills list here
      </section>
      */}
        </div>
  );
}
