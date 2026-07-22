'use client';

import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Zap, 
  TrendingUp, 
  HeadphonesIcon, 
  Trophy, 
  Award, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const tickerItems = [
    "🏆 USER_9921 WON ₹45,000 on CSK vs MI!",
    "🔥 USER_8832 WON ₹1,20,000 on Teen Patti!",
    "⚡ USER_4411 WITHDREW ₹75,000 in 4 mins!",
    "🎯 USER_5782 WON ₹88,000 on IND vs AUS!"
  ];

  const faqs = [
    "What is Mahadev Book Online Betting ID?",
    "How does Mahadev Book work?",
    "How do I register for a new Online Betting ID?",
    "What games can I play with my Mahadev Book ID?",
    "How do I deposit money into my Mahadev Book account?",
    "How do I withdraw my winnings?",
    "Is Mahadev Book legal in India?",
    "Is Mahadev Book safe and trusted?"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#050505] font-sans selection:bg-yellow-500/30">
      {/* Background ambient effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-600/10 blur-[120px] animate-float-slow pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-yellow-500/10 blur-[120px] animate-float-delay pointer-events-none" />
      <div className="absolute inset-0 gold-grid opacity-30 pointer-events-none" />

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-2">
              <Trophy className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-yellow-600">
                MAHADEV BOOK
              </span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hidden md:block px-4 py-2 text-gray-300 hover:text-white transition-colors">
                Login
              </button>
              <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(234,179,8,0.3)]">
                Get Your ID
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Elevate the level of your <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 gold-text-glow">
                Game Experience
              </span>
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-400 mb-10">
              Join India's largest trusted community of players with instant payouts, secure transactions, and 60K+ live events.
            </p>
            <div className="flex justify-center gap-4">
              <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]">
                <span className="relative z-10 flex items-center gap-2">
                  Claim Your ID <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </button>
              <button className="px-8 py-4 rounded-full glass-card text-white font-semibold text-lg hover:bg-white/10 transition-colors flex items-center gap-2">
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </button>
            </div>
          </motion.div>
        </div>

        {/* Stats Strip */}
        <div className="mt-20 border-y border-white/5 bg-black/50 backdrop-blur-md py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
              <div className="px-4">
                <div className="text-3xl font-bold text-yellow-500 mb-1">1.2M+</div>
                <div className="text-sm text-gray-400">Active Users<br/>Trusted since 2018</div>
              </div>
              <div className="px-4">
                <div className="text-3xl font-bold text-yellow-500 mb-1">60K+</div>
                <div className="text-sm text-gray-400">Events / Month<br/>Live sports & games</div>
              </div>
              <div className="px-4">
                <div className="text-3xl font-bold text-yellow-500 mb-1">24/7</div>
                <div className="text-sm text-gray-400">Support<br/>Personalized assistance</div>
              </div>
              <div className="px-4">
                <div className="text-3xl font-bold text-yellow-500 mb-1">&lt; 1m</div>
                <div className="text-sm text-gray-400">Avg Response<br/>Lightning fast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Winnings Ticker */}
      <div className="bg-gradient-to-r from-yellow-900/40 via-yellow-600/40 to-yellow-900/40 border-y border-yellow-500/20 py-3 overflow-hidden flex whitespace-nowrap">
        <div className="animate-ticker flex items-center gap-12 text-sm font-medium">
          {[...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="text-yellow-100 flex items-center gap-2">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* What is Mahadev Book */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">WHAT IS <span className="text-yellow-500">MAHADEV BOOK?</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A unique platform connecting players with bookies featuring a highly trusted environment for betting enthusiasts.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: "Secure Payments", desc: "UPI, GPay, Paytm, PhonePe, local bank DD with 256-bit security." },
              { icon: Zap, title: "Fast Payouts", desc: "Direct bank transfer withdrawals in fastest time, 5-10 mins flat." },
              { icon: TrendingUp, title: "Data Insights", desc: "Free prediction models, player stats, head-to-head data." },
              { icon: HeadphonesIcon, title: "24/7 WhatsApp Support", desc: "Personal relationship managers to assist you round the clock." }
            ].map((feature, idx) => (
              <div key={idx} className="glass-card glass-card-hover p-6 rounded-2xl">
                <div className="w-12 h-12 bg-yellow-500/10 rounded-xl flex items-center justify-center mb-4 text-yellow-500">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Markets */}
      <section className="py-24 bg-black/40 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">POPULAR <span className="text-yellow-500">MARKETS</span></h2>
              <p className="text-gray-400 text-lg">Your One Verified ID To Play All Sports</p>
            </div>
            <button className="mt-4 md:mt-0 text-yellow-500 hover:text-yellow-400 font-semibold flex items-center gap-2">
              View All Games <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { emoji: "🏏", title: "Cricket Betting", desc: "Live IPL, International matches, T20 leagues with best odds." },
              { emoji: "⚽", title: "Football Leagues", desc: "Premier league, champion league, super league, ISL, La Liga betting." },
              { emoji: "🃏", title: "Live Casino", desc: "Teen Patti, Andar Bahar, Roulette, Poker online live dealer game." },
              { emoji: "🎾", title: "Tennis Matches", desc: "Grand slam, ATP, WTA, tennis betting with live scores updates." },
              { emoji: "🎮", title: "Virtual Sports", desc: "Fast & furious digital cricket, football, racing game 24X7." }
            ].map((market, idx) => (
              <div key={idx} className="glass-card hover:bg-yellow-500/5 transition-colors p-6 rounded-2xl flex flex-col items-center text-center group cursor-pointer border border-white/10 hover:border-yellow-500/30">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{market.emoji}</div>
                <h3 className="text-lg font-bold mb-2 text-white">{market.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{market.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">TRUST <span className="text-yellow-500">PILLARS</span></h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Expertise", desc: "Gaming experts with 15+ years deep knowledge of sports betting space." },
              { icon: TrendingUp, title: "Experience", desc: "Trusted by 1.2M+ registered users with 60M+ successful transactions." },
              { icon: Trophy, title: "Authority", desc: "India's most popular betting platform by multiple credible industry awards." },
              { icon: Lock, title: "Trust", desc: "SSL & PCI-DSS certified, fair-play website by iTech Labs." }
            ].map((pillar, idx) => (
              <div key={idx} className="relative p-1 rounded-2xl bg-gradient-to-b from-white/10 to-transparent">
                <div className="h-full bg-[#0a0a0a] rounded-xl p-6 flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 p-[1px] mb-4">
                    <div className="w-full h-full bg-[#0a0a0a] rounded-full flex items-center justify-center text-yellow-500">
                      <pillar.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{pillar.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-transparent to-black/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">USER <span className="text-yellow-500">TESTIMONIALS</span></h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Rahul S.", loc: "Mumbai", quote: "Withdrew amount within 5 mins! Best betting platform till date." },
              { name: "Priya K.", loc: "Delhi", quote: "Got my ID created same day. Great support team & smooth process!" },
              { name: "Vikram M.", loc: "Bangalore", quote: "Experience of betting on IPL was amazing. Fast payouts!" },
              { name: "Ankit T.", loc: "Pune", quote: "100% genuine site. Trust Mahadev Book for all my betting needs." }
            ].map((test, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl relative">
                <div className="text-yellow-500 opacity-20 text-6xl absolute top-2 right-4 font-serif">"</div>
                <div className="flex items-center gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>)}
                </div>
                <p className="text-gray-300 italic mb-6 text-sm relative z-10">"{test.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-yellow-600 to-yellow-800 flex items-center justify-center font-bold">{test.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-sm text-white">{test.name}</h4>
                    <p className="text-xs text-gray-500">{test.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Questions?</h2>
          <div className="space-y-4">
            {faqs.map((q, idx) => (
              <div key={idx} className="glass-card rounded-xl overflow-hidden transition-all duration-300">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-gray-200">{q}</span>
                  <ChevronDown className={`w-5 h-5 text-yellow-500 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-4 text-gray-400 text-sm">
                    Our support team is available 24/7 on WhatsApp to answer this question and provide detailed assistance tailored to you.
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">24/7 Support Available</p>
            <button className="px-6 py-3 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20b958] transition-colors inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Chat on WhatsApp Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <Trophy className="h-6 w-6 text-yellow-500" />
                <span className="text-xl font-bold text-white">Mahadev Book</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                India's most trusted Sports insights and fantasy analytics platform. Delivering live odds, player analysis, betting IDs, and verified bookies across the nation since 2018.
              </p>
              <div className="mt-6 flex gap-4">
                <CheckCircle2 className="text-green-500 w-6 h-6" />
                <Lock className="text-blue-500 w-6 h-6" />
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Insights Blog</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Mahadev Betting App</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Mahadev Book ID</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-yellow-500 transition-colors">Contact Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Supported Platforms</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Gold365 Exchange</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Laser247 Official</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> IPL Cricket Betting ID</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Online Betting ID India</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Mahadev Book Online Book</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-yellow-500"></div> Mahadev Book Official</li>
              </ul>
            </div>
            
            <div>
              <div className="p-6 rounded-2xl glass-card border border-yellow-500/20">
                <h4 className="text-white font-bold mb-4 text-center">Get Started</h4>
                <p className="text-xs text-gray-400 text-center mb-4">Create your secure betting profile in less than 2 mins and start winning!</p>
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold hover:scale-105 transition-transform">
                  Claim ID Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-4">
              <span>SSL Secured</span>
              <span className="flex items-center gap-1 border border-gray-600 px-2 py-1 rounded">18+ Play Responsibly</span>
            </div>
            <p>© 2026 Mahadev Book. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
