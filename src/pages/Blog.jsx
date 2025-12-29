import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../mockData';

const Blog = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Cybersecurity', 'Cloud Computing', 'AI & Technology', 'Web Development', 'Networking', 'Career & Training'];

  const filteredPosts = filter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Tech Insights & Updates
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Stay updated with the latest trends, tips, and insights from the tech world
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No articles found in this category.</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              <Card className="overflow-hidden border-0 shadow-xl mb-12 group">
                <div className="grid md:grid-cols-2">
                  <div 
                    className="h-80 md:h-auto bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${filteredPosts[0].image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-blue-900/60 group-hover:from-blue-700/70 group-hover:to-blue-900/70 transition-all" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-white text-blue-600 font-bold">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-blue-100 text-blue-600">
                      {filteredPosts[0].category}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                      {filteredPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {filteredPosts[0].excerpt}
                    </p>
                    <div className="flex items-center text-gray-500 text-sm mb-6 space-x-6">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        {filteredPosts[0].author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {new Date(filteredPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {filteredPosts[0].readTime}
                      </div>
                    </div>
                    <Button className="w-fit bg-blue-600 hover:bg-blue-700 text-white group">
                      Read Full Article
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </div>
              </Card>

              {/* Other Posts */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.slice(1).map((post) => (
                  <Card key={post.id} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group">
                    <div 
                      className="h-48 bg-cover bg-center relative overflow-hidden"
                      style={{ backgroundImage: `url(${post.image})` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/60 to-blue-900/60 group-hover:from-blue-700/70 group-hover:to-blue-900/70 transition-all" />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-white text-blue-600 font-bold text-xs">
                          {post.category}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-gray-500 text-xs mb-4 space-x-4">
                        <div className="flex items-center">
                          <User className="w-3 h-3 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="text-sm text-gray-500 mb-4">
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <Button variant="outline" className="w-full group border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                        Read More
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Get the latest tech insights and updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
            />
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

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

export default Blog;
