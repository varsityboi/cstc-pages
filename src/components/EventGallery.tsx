
import React, { useState, useEffect } from 'react';
import { X, ZoomIn, Filter, Grid3X3, Grid, Search } from 'lucide-react';

const EventGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=6052&q=80",
      alt: "Main stage presentation with large screens",
      title: "Keynote Presentation",
      category: "presentations",
      tags: ["keynote", "stage", "tech"]
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80",
      alt: "Interactive coding workshop session",
      title: "Interactive Workshop",
      category: "workshops",
      tags: ["coding", "workshop", "interactive"]
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=5760&q=80",
      alt: "Technology innovation showcase",
      title: "Tech Innovation Hub",
      category: "showcase",
      tags: ["innovation", "technology", "future"]
    },
    {
      src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4896&q=80",
      alt: "AI and robotics demonstration",
      title: "AI & Robotics Demo",
      category: "demo",
      tags: ["AI", "robotics", "demo", "future"]
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3880&q=80",
      alt: "Evening networking event under stars",
      title: "Evening Networking",
      category: "networking",
      tags: ["networking", "evening", "community"]
    },
    {
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      alt: "Collaborative workspace session",
      title: "Team Collaboration",
      category: "workshops",
      tags: ["collaboration", "teamwork", "workspace"]
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
      alt: "Developer coding session",
      title: "Code Sprint",
      category: "workshops",
      tags: ["coding", "development", "sprint"]
    },
    {
      src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      alt: "Panel discussion with industry experts",
      title: "Expert Panel",
      category: "presentations",
      tags: ["panel", "experts", "discussion"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Photos', count: images.length },
    { id: 'presentations', name: 'Presentations', count: images.filter(img => img.category === 'presentations').length },
    { id: 'workshops', name: 'Workshops', count: images.filter(img => img.category === 'workshops').length },
    { id: 'showcase', name: 'Showcase', count: images.filter(img => img.category === 'showcase').length },
    { id: 'demo', name: 'Demos', count: images.filter(img => img.category === 'demo').length },
    { id: 'networking', name: 'Networking', count: images.filter(img => img.category === 'networking').length }
  ];

  const filteredImages = images.filter(image => {
    const matchesFilter = activeFilter === 'all' || image.category === activeFilter;
    const matchesSearch = searchQuery === '' || 
      image.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const getGridClass = () => {
    if (viewMode === 'masonry') {
      return 'columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
    }
    return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            Event Gallery
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Immerse yourself in the moments that defined TechFest 2024
          </p>
        </div>

        {/* Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-all duration-300"
            />
          </div>

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white border-transparent shadow-lg shadow-purple-500/25'
                    : 'bg-white/10 text-white/70 border-white/20 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'grid' ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('masonry')}
              className={`p-3 rounded-lg transition-all duration-300 ${
                viewMode === 'masonry' ? 'bg-purple-500 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={getGridClass()}>
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 hover:scale-105 hover:rotate-1 transition-all duration-700 cursor-pointer ${
                viewMode === 'masonry' ? 'break-inside-avoid mb-6' : ''
              }`}
              onClick={() => setSelectedImage(image)}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className={viewMode === 'masonry' ? 'aspect-auto' : 'aspect-square'}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.title}
                  </h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {image.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-white/80 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    <span className="text-sm">Click to expand</span>
                  </div>
                </div>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-white mb-2">No photos found</h3>
            <p className="text-white/70">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Enhanced Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl">
          <div className="relative max-w-6xl max-h-full p-4 w-full">
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-2 -right-2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Image container */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain mx-auto rounded-2xl"
              />
              
              {/* Image info overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-2xl">
                <div className="max-w-4xl mx-auto">
                  <h3 className="text-white text-2xl font-bold mb-3">{selectedImage.title}</h3>
                  <p className="text-white/80 mb-4">{selectedImage.alt}</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedImage.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventGallery;
