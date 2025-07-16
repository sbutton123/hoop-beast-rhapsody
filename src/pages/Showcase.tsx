import { Heart, Share2, MessageCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Showcase = () => {
  const posts = [
    {
      id: 1,
      user: "Sarah Beast",
      location: "Los Angeles, CA",
      caption: "Just nailed my first double spin! The Beast training is paying off! 🔥",
      likes: 127,
      comments: 23,
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      user: "Mike Thunder",
      location: "New York, NY",
      caption: "Flow state achieved! Check out this epic transition sequence",
      likes: 203,
      comments: 45,
      timestamp: "4 hours ago"
    },
    {
      id: 3,
      user: "Luna Goddess",
      location: "Miami, FL",
      caption: "Sunset session at the beach. Nothing beats hoop flow by the ocean! 🌊",
      likes: 89,
      comments: 12,
      timestamp: "6 hours ago"
    },
    {
      id: 4,
      user: "Beast Master Alex",
      location: "Seattle, WA",
      caption: "Teaching my daughter the art of the hoop. Next generation beast in training!",
      likes: 156,
      comments: 34,
      timestamp: "8 hours ago"
    },
    {
      id: 5,
      user: "Hoop Ninja",
      location: "Austin, TX",
      caption: "Core workout complete! 45 minutes of pure beast mode intensity",
      likes: 94,
      comments: 18,
      timestamp: "12 hours ago"
    },
    {
      id: 6,
      user: "Rhythm Queen",
      location: "Chicago, IL",
      caption: "Dance fusion flow at its finest. Music + hoop = pure magic ✨",
      likes: 178,
      comments: 29,
      timestamp: "1 day ago"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      // The hero section now reads:
<h1 className="font-bangers text-5xl md:text-6xl text-white mb-6">
  BEAST MOVES
</h1>
<p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
  Watch raw flow, killer combos, and jaw-dropping performances — all powered
  by the Hula Hoop Beast within. From stage shows to random bursts of hoop
  joy, this is where the magic happens.
</p>
          <Button size="lg" className="btn-beast">
            SHARE YOUR BEAST MOMENT
          </Button>
        </div>
      </section>

      {/* Community Feed */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {posts.map((post) => (
              <Card key={post.id} className="shadow-beast">
                <CardContent className="p-6">
                  {/* Post Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-beast rounded-full flex items-center justify-center">
                        <span className="text-white font-bangers text-sm">
                          {post.user.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bangers text-lg text-gradient-beast">
                          {post.user}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {post.location} • {post.timestamp}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
                  </div>

                  {/* Post Content */}
                  <div className="mb-4">
                    <p className="text-foreground mb-4">{post.caption}</p>
                    
                    {/* Placeholder for video/image */}
                    <div className="aspect-video bg-gradient-beast-light rounded-lg flex items-center justify-center">
                      <Play className="h-16 w-16 text-white/70" />
                    </div>
                  </div>

                  {/* Post Actions */}
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-6">
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-red-500 transition-colors">
                        <Heart className="h-5 w-5" />
                        <span>{post.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                        <MessageCircle className="h-5 w-5" />
                        <span>{post.comments}</span>
                      </button>
                    </div>
                    <button className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span>Share</span>
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Showcase;
