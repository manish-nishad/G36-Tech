import React, { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../mockData';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BlogSingle = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === parseInt(id)) || blogPosts[0];
  const relatedPosts = blogPosts.filter(p => p.id !== post.id && p.category === post.category).slice(0, 3);
  
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Hero animation
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    // Content animations
    gsap.from(contentRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      scrollTrigger: {
        trigger: contentRef.current,
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(10px)'
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog">
            <Button variant="outline" className="mb-8 border-black text-white hover:bg-white hover:text-blue-600">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
          
          <Badge className="mb-6 bg-white text-blue-600 font-bold">
            {post.category}
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-blue-100">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              {post.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              {post.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2" ref={contentRef}>
              <Card className="mb-8 border-0 shadow-xl overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-96 object-cover"
                />
              </Card>

              <div className="prose prose-lg max-w-none">
                <Card className="border-0 shadow-lg mb-8">
                  <CardContent className="p-8">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Understanding the Challenge</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      In today's rapidly evolving digital landscape, businesses face unprecedented challenges in managing their IT infrastructure and security. This article explores comprehensive strategies and best practices that organizations can implement to stay ahead of potential threats while optimizing their technology investments.
                    </p>
                    
                    <p className="text-gray-700 leading-relaxed mb-6">
                      The importance of a proactive approach cannot be overstated. Rather than waiting for issues to arise, successful organizations implement robust monitoring systems, regular security audits, and continuous improvement processes that help identify and address potential vulnerabilities before they become critical problems.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Key Strategies for Success</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Implementation of cutting-edge solutions requires a multi-faceted approach. Organizations must balance security requirements with usability, ensure scalability for future growth, and maintain compliance with relevant industry regulations and standards.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
                      <p className="text-gray-800 italic">
                        "Success in IT implementation comes from understanding both the technical requirements and the human factors involved. Technology is only as effective as the people using it."
                      </p>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Best Practices to Follow</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">Conduct regular security audits and vulnerability assessments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">Implement comprehensive backup and disaster recovery plans</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">Provide ongoing training and education for all team members</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">Stay updated with the latest industry trends and technologies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700">Maintain clear documentation and standard operating procedures</span>
                      </li>
                    </ul>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Looking Forward</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      As we move forward, the integration of artificial intelligence, machine learning, and automation will continue to reshape how organizations approach IT management and security. Staying informed about these emerging technologies and understanding how to leverage them effectively will be crucial for maintaining competitive advantage.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                      The future belongs to organizations that can adapt quickly to changing circumstances while maintaining robust security and operational efficiency. By implementing the strategies discussed in this article, businesses can position themselves for long-term success in an increasingly digital world.
                    </p>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8">Conclusion</h2>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      Success in today's technology landscape requires a combination of technical expertise, strategic planning, and continuous adaptation. Organizations that invest in proper infrastructure, training, and security measures will be better positioned to face future challenges and capitalize on emerging opportunities.
                    </p>
                  </CardContent>
                </Card>

                {/* Share Section */}
                <Card className="border-0 shadow-lg mb-8">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Author Bio */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {post.author} is a senior technology consultant at Genius36 Technologies with over 10 years of experience in IT infrastructure, cybersecurity, and digital transformation. Passionate about helping businesses leverage technology for growth and innovation.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Table of Contents */}
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Table of Contents</h3>
                    <ul className="space-y-3">
                      <li>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Understanding the Challenge</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Key Strategies for Success</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Best Practices to Follow</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Looking Forward</a>
                      </li>
                      <li>
                        <a href="#" className="text-blue-600 hover:text-blue-700 hover:underline">Conclusion</a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                    <p className="mb-4 text-blue-100">Get the latest tech insights delivered to your inbox</p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-4 py-2 rounded-lg mb-4 text-gray-900"
                    />
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">
                      Subscribe
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} to={`/blog/${relatedPost.id}`}>
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group h-full">
                    <div 
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${relatedPost.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-blue-900/60 group-hover:from-blue-700/70 group-hover:to-blue-900/70 transition-all" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-blue-100 text-blue-600">
                        {relatedPost.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center text-gray-500 text-xs space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {relatedPost.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Need Expert IT Consultation?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Our team is ready to help you with your technology challenges
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6">
                Contact Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:08200593901">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6">
                Call: 082005 93901
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSingle;
