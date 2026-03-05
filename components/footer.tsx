import Link from "next/link";
import { Github, Linkedin, Terminal, Heart } from "lucide-react";

const navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],
  social: [
    { name: "GitHub", href: "https://github.com/codythecoder", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/codythecoder", icon: Linkedin },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="flex flex-col items-center lg:items-start gap-4">
            <Link href="/" className="flex items-center gap-2 group">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-mono text-base font-semibold">
                <span className="text-foreground">cody</span>
                <span className="text-primary">.</span>
                <span className="text-muted-foreground">dev</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Building resilient systems at scale.
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={item.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border/50">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {new Date().getFullYear()} Cody the Coder. All rights reserved.
            </p>
            <p className="flex items-center gap-1.5">
              Built with{" "}
              <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" />
              {" "}using Next.js & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
