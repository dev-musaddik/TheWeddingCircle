import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import { insightsData } from './Insights';

const InsightDetail = () => {
  const { id } = useParams();
  const article = insightsData.find(item => item.id === parseInt(id));

  // If article not found, redirect to insights page
  if (!article) {
    return <Navigate to="/insights" replace />;
  }

  // Get related articles (other articles excluding current one)
  const relatedArticles = insightsData
    .filter(item => item.id !== article.id)
    .slice(0, 2);

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Render content based on type
  const renderContent = (contentItem, index) => {
    switch (contentItem.type) {
      case 'heading':
        const HeadingTag = contentItem.level;
        return (
          <HeadingTag 
            key={index} 
            className={`font-serif mb-6 mt-12 ${
              contentItem.level === 'h2' 
                ? 'text-3xl md:text-4xl' 
                : 'text-2xl md:text-3xl'
            }`}
          >
            {contentItem.text}
          </HeadingTag>
        );
      
      case 'paragraph':
        return (
          <p 
            key={index} 
            className="text-lg leading-relaxed mb-6 text-gray-700 whitespace-pre-line"
          >
            {contentItem.text}
          </p>
        );
      
      case 'quote':
        return (
          <blockquote 
            key={index} 
            className="border-l-4 border-accent pl-6 py-4 my-8 italic text-2xl text-gray-800 bg-secondary"
          >
            "{contentItem.text}"
          </blockquote>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-end overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 pb-16">
          {/* Breadcrumb */}
          <Link 
            to="/insights" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Insights
          </Link>

          {/* Category Badge */}
          <span className="inline-block px-4 py-1 bg-accent text-primary text-xs font-bold tracking-widest uppercase mb-4">
            {article.category}
          </span>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {formatDate(article.publishDate)}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {article.readTime}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 font-light">
            {article.excerpt}
          </p>

          {/* Content Sections */}
          <div className="article-content">
            {article.content.map((contentItem, index) => 
              renderContent(contentItem, index)
            )}
          </div>

          {/* Author Bio Section */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-primary text-2xl font-serif">
                {article.author.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-serif mb-2">Written by {article.author}</h3>
                <p className="text-gray-600 text-sm">
                  Contributing writer for The Wedding Circle, specializing in {article.category.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-20 px-4 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Related Insights
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
              {relatedArticles.map((relatedArticle) => (
                <Link
                  key={relatedArticle.id}
                  to={`/insights/${relatedArticle.id}`}
                  className="flex flex-col bg-white rounded-sm shadow-sm hover-lift overflow-hidden group"
                >
                  <div className="relative overflow-hidden h-64">
                    <img 
                      src={relatedArticle.image} 
                      alt={relatedArticle.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-2xl font-serif mb-3 leading-snug group-hover:text-accent transition-colors">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {relatedArticle.excerpt}
                    </p>
                    <span className="inline-flex items-center text-primary font-medium border-b border-primary group-hover:text-accent group-hover:border-accent transition-colors">
                      Read Article →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link 
                to="/insights"
                className="inline-block px-10 py-4 bg-primary text-white font-medium hover:bg-accent hover:text-primary transition-colors uppercase tracking-widest rounded-sm"
              >
                View All Insights
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default InsightDetail;
