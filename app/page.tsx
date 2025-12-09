'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    monthlyAdSpend: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', monthlyAdSpend: '', message: '' })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main className={styles.main}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <span className={styles.logoText}>ADCRAZE</span>
          </div>
          <div className={styles.navLinks}>
            <a href="#how-it-works" className={styles.navLink}>How It Works</a>
            <a href="#results" className={styles.navLink}>Results</a>
            <a href="#pricing" className={styles.navLink}>Pricing</a>
            <a href="#contact" className={styles.ctaButton}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span>⚡</span> Performance-Based. Zero Fluff. Pure ROI.
            </div>
            <h1 className={styles.heroTitle}>
              Stop Burning Money on Ads That Don't Convert
            </h1>
            <p className={styles.heroSubtitle}>
              We only win when you win. Get results-driven digital advertising that scales your revenue—not your costs.
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>3.2x</div>
                <div className={styles.statLabel}>Average ROAS</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>$42M+</div>
                <div className={styles.statLabel}>Client Revenue</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>180+</div>
                <div className={styles.statLabel}>Growing Brands</div>
              </div>
            </div>
            <div className={styles.heroButtons}>
              <a href="#contact" className={styles.primaryButton}>
                Book Free Strategy Call
              </a>
              <a href="#how-it-works" className={styles.secondaryButton}>
                See How It Works →
              </a>
            </div>
            <div className={styles.trustBadges}>
              <span>✓ No Long-Term Contracts</span>
              <span>✓ Performance Guarantee</span>
              <span>✓ Full Transparency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className={styles.problemSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Sound Familiar?</h2>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>💸</div>
              <h3>Throwing Money at Ads With No Clear ROI</h3>
              <p>You're spending thousands on Facebook and Google ads, but can't track real business impact.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>📉</div>
              <h3>Your Agency Over-Promises, Under-Delivers</h3>
              <p>Fancy reports, vague metrics, zero accountability. You're tired of "vanity metrics" that don't pay the bills.</p>
            </div>
            <div className={styles.problemCard}>
              <div className={styles.problemIcon}>⏰</div>
              <h3>No Time to Become an Ads Expert</h3>
              <p>You're running a business—not a marketing department. You need results, not another course to take.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className={styles.solutionSection} id="how-it-works">
        <div className={styles.container}>
          <div className={styles.solutionHeader}>
            <div className={styles.badge}>The Adcraze Difference</div>
            <h2 className={styles.sectionTitle}>We Tie Our Success to Your Revenue</h2>
            <p className={styles.sectionSubtitle}>
              No smoke and mirrors. No BS metrics. Just performance-based advertising that puts your growth first.
            </p>
          </div>

          <div className={styles.processSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>01</div>
              <h3>Deep-Dive Audit</h3>
              <p>We analyze your current ads, customer data, and competitors to find exactly where you're bleeding money.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>02</div>
              <h3>Custom Growth Plan</h3>
              <p>No cookie-cutter strategies. We build a performance roadmap tailored to your business goals and budget.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>03</div>
              <h3>Launch & Scale</h3>
              <p>We launch data-driven campaigns, optimize relentlessly, and scale what works—killing what doesn't.</p>
            </div>
            <div className={styles.stepArrow}>→</div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>04</div>
              <h3>Transparent Reporting</h3>
              <p>Real-time dashboards showing actual revenue, customer acquisition costs, and profitability—not vanity metrics.</p>
            </div>
          </div>

          <div className={styles.guaranteeBox}>
            <div className={styles.guaranteeIcon}>🛡️</div>
            <div className={styles.guaranteeContent}>
              <h3>Our Performance Guarantee</h3>
              <p>If we don't hit agreed performance targets in the first 90 days, you don't pay management fees. Period.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className={styles.resultsSection} id="results">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Real Clients. Real Results.</h2>
          <p className={styles.sectionSubtitle}>No stock photos. No made-up numbers. Just businesses we've helped scale.</p>

          <div className={styles.caseStudies}>
            <div className={styles.caseStudy}>
              <div className={styles.caseStudyHeader}>
                <h4>E-Commerce Fashion Brand</h4>
                <span className={styles.industry}>E-commerce</span>
              </div>
              <p className={styles.caseStudyChallenge}>
                <strong>Challenge:</strong> Spending $15K/month on ads with 1.8x ROAS. High cart abandonment, poor retargeting.
              </p>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>4.7x</div>
                  <div className={styles.resultLabel}>ROAS</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>312%</div>
                  <div className={styles.resultLabel}>Revenue Growth</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>-42%</div>
                  <div className={styles.resultLabel}>CAC Reduction</div>
                </div>
              </div>
            </div>

            <div className={styles.caseStudy}>
              <div className={styles.caseStudyHeader}>
                <h4>B2B SaaS Platform</h4>
                <span className={styles.industry}>SaaS</span>
              </div>
              <p className={styles.caseStudyChallenge}>
                <strong>Challenge:</strong> Lead gen campaigns generating low-quality leads. $450 cost per qualified lead.
              </p>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>$127</div>
                  <div className={styles.resultLabel}>Cost Per Lead</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>3.8x</div>
                  <div className={styles.resultLabel}>Lead Volume</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>68%</div>
                  <div className={styles.resultLabel}>Qualified Rate</div>
                </div>
              </div>
            </div>

            <div className={styles.caseStudy}>
              <div className={styles.caseStudyHeader}>
                <h4>Local Service Business</h4>
                <span className={styles.industry}>Services</span>
              </div>
              <p className={styles.caseStudyChallenge}>
                <strong>Challenge:</strong> Relying on referrals. Tried running Google Ads but got zero conversions.
              </p>
              <div className={styles.resultsGrid}>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>127</div>
                  <div className={styles.resultLabel}>Qualified Leads/Mo</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>$180K</div>
                  <div className={styles.resultLabel}>New MRR</div>
                </div>
                <div className={styles.resultItem}>
                  <div className={styles.resultNumber}>5.2x</div>
                  <div className={styles.resultLabel}>ROAS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection} id="pricing">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Transparent Pricing. No Hidden Fees.</h2>
          <p className={styles.sectionSubtitle}>Choose the model that aligns with your growth stage</p>

          <div className={styles.pricingGrid}>
            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Growth Partner</h3>
                <p className={styles.pricingSubtext}>Best for scaling businesses</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.priceAmount}>12-15%</span>
                <span className={styles.priceLabel}>of ad spend</span>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Full campaign management</li>
                <li>✓ Creative & landing page optimization</li>
                <li>✓ Weekly performance reviews</li>
                <li>✓ Real-time reporting dashboard</li>
                <li>✓ Dedicated account strategist</li>
                <li>✓ 90-day performance guarantee</li>
              </ul>
              <a href="#contact" className={styles.pricingButton}>Get Started</a>
              <p className={styles.pricingNote}>Minimum $5K/month ad spend</p>
            </div>

            <div className={`${styles.pricingCard} ${styles.featured}`}>
              <div className={styles.featuredBadge}>Most Popular</div>
              <div className={styles.pricingHeader}>
                <h3>Performance Plus</h3>
                <p className={styles.pricingSubtext}>Pay for results, not effort</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.priceAmount}>Hybrid</span>
                <span className={styles.priceLabel}>Base fee + % of revenue</span>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Everything in Growth Partner</li>
                <li>✓ Revenue-share model (we win when you win)</li>
                <li>✓ Bi-weekly strategy calls</li>
                <li>✓ Advanced attribution modeling</li>
                <li>✓ Conversion rate optimization</li>
                <li>✓ Priority support</li>
                <li>✓ No long-term contracts</li>
              </ul>
              <a href="#contact" className={styles.pricingButtonFeatured}>Book Strategy Call</a>
              <p className={styles.pricingNote}>Minimum $10K/month ad spend</p>
            </div>

            <div className={styles.pricingCard}>
              <div className={styles.pricingHeader}>
                <h3>Enterprise</h3>
                <p className={styles.pricingSubtext}>For established brands</p>
              </div>
              <div className={styles.pricingPrice}>
                <span className={styles.priceAmount}>Custom</span>
                <span className={styles.priceLabel}>Tailored to your needs</span>
              </div>
              <ul className={styles.pricingFeatures}>
                <li>✓ Everything in Performance Plus</li>
                <li>✓ Multi-channel strategy (social, search, display)</li>
                <li>✓ Custom integrations & API access</li>
                <li>✓ White-label reporting</li>
                <li>✓ Dedicated team (3-5 specialists)</li>
                <li>✓ Quarterly business reviews</li>
                <li>✓ Priority campaign launches</li>
              </ul>
              <a href="#contact" className={styles.pricingButton}>Contact Sales</a>
              <p className={styles.pricingNote}>$50K+ monthly ad spend</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Common Questions</h2>
          <div className={styles.faqGrid}>
            <div className={styles.faqItem}>
              <h3>What makes Adcraze different from other agencies?</h3>
              <p>We tie our compensation to your results. If you don't hit performance targets, you don't pay full fees. Most agencies charge regardless of performance—we only succeed when you do.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What platforms do you advertise on?</h3>
              <p>We specialize in Facebook/Instagram Ads, Google Ads (Search & Display), YouTube, TikTok, and LinkedIn. We recommend platforms based on where your customers actually are—not what's trendy.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How quickly will I see results?</h3>
              <p>Most clients see improvement within 30-45 days, with significant gains by month 3. We're optimizing daily, but sustainable growth takes strategic testing and iteration.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>Do I need to sign a long-term contract?</h3>
              <p>No. We offer month-to-month agreements for our Performance Plus tier. We earn your business every month through results, not contracts.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>What if I've tried ads before and failed?</h3>
              <p>Perfect. That's our specialty. We'll audit what went wrong, fix the leaks, and rebuild your campaigns with data-driven strategies that actually convert.</p>
            </div>
            <div className={styles.faqItem}>
              <h3>How involved do I need to be?</h3>
              <p>We handle the heavy lifting, but your input is crucial for brand voice and offers. Expect a 1-hour onboarding, weekly 15-min check-ins, and access to real-time dashboards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={styles.contactSection} id="contact">
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Ready to Scale Profitably?</h2>
              <p className={styles.contactSubtitle}>
                Book a free 30-minute strategy call. We'll audit your current advertising and show you exactly where you're losing money—and how to fix it.
              </p>
              <div className={styles.contactBenefits}>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div>
                    <h4>Free Ad Account Audit</h4>
                    <p>We'll review your campaigns and identify quick wins</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div>
                    <h4>Custom Growth Roadmap</h4>
                    <p>Get a tailored plan for your business (yours to keep)</p>
                  </div>
                </div>
                <div className={styles.benefit}>
                  <div className={styles.benefitIcon}>✓</div>
                  <div>
                    <h4>No Pressure, No Obligation</h4>
                    <p>Honest advice whether we work together or not</p>
                  </div>
                </div>
              </div>
              <div className={styles.urgencyBox}>
                <strong>⏰ Limited Availability:</strong> We only take on 3 new clients per month to ensure quality. Current spots: 1 remaining
              </div>
            </div>

            <div className={styles.contactForm}>
              {submitStatus === 'success' ? (
                <div className={styles.successMessage}>
                  <div className={styles.successIcon}>✓</div>
                  <h3>We've Got Your Info!</h3>
                  <p>Our team will review your details and reach out within 24 hours to schedule your strategy call.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                    />
                  </div>

                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="company">Company Name *</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Acme Inc."
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="monthlyAdSpend">Current Monthly Ad Spend *</label>
                    <select
                      id="monthlyAdSpend"
                      name="monthlyAdSpend"
                      value={formData.monthlyAdSpend}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select range...</option>
                      <option value="0-5k">$0 - $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k+">$50,000+</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">What's your biggest advertising challenge? *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="e.g., We're spending $10K/month but can't track real ROI..."
                    />
                  </div>

                  <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Book My Free Strategy Call →'}
                  </button>

                  <p className={styles.formDisclaimer}>
                    By submitting, you agree to receive communications from Adcraze. Unsubscribe anytime. We respect your privacy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerBrand}>
              <div className={styles.footerLogo}>ADCRAZE</div>
              <p>Performance-based advertising that scales your revenue, not your costs.</p>
            </div>
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <h4>Company</h4>
                <a href="#how-it-works">How It Works</a>
                <a href="#results">Case Studies</a>
                <a href="#pricing">Pricing</a>
                <a href="#contact">Contact</a>
              </div>
              <div className={styles.footerColumn}>
                <h4>Resources</h4>
                <a href="#">Blog</a>
                <a href="#">Ad Spend Calculator</a>
                <a href="#">Free Audit</a>
                <a href="#">Privacy Policy</a>
              </div>
              <div className={styles.footerColumn}>
                <h4>Contact</h4>
                <a href="mailto:hello@adcraze.com">hello@adcraze.com</a>
                <a href="tel:+1234567890">(123) 456-7890</a>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p>&copy; 2024 Adcraze. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
