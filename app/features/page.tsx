import { Shield, Globe, HeartPulse, LifeBuoy, Lock, Gauge } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">
                Premium
              </span>{" "}
              Features
            </h1>
            <p className="text-xl text-white/80">
              Discover the advanced features that set VestroCloud apart from other hosting providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center mr-4">
                  <Gauge className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">High-Performance Hardware</h3>
              </div>
              <p className="text-white/70">
                Our servers are equipped with the latest generation processors, NVMe SSD storage, and high-speed
                networking to ensure optimal performance for your applications.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                  <Shield className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Advanced Security</h3>
              </div>
              <p className="text-white/70">
                Protect your data with our enterprise-grade security features, including DDoS protection, firewall,
                intrusion detection, and regular security updates.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-pink-600/30 flex items-center justify-center mr-4">
                  <HeartPulse className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">99.9% Uptime Guarantee</h3>
              </div>
              <p className="text-white/70">
                We guarantee 99.9% uptime for all our services, backed by our Service Level Agreement (SLA) and
                proactive monitoring systems.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-600/30 flex items-center justify-center mr-4">
                  <LifeBuoy className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">24/7 Expert Support</h3>
              </div>
              <p className="text-white/70">
                Our team of experienced support engineers is available 24/7 to assist you with any questions or issues
                you may encounter.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-600/30 flex items-center justify-center mr-4">
                  <Globe className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Global Network</h3>
              </div>
              <p className="text-white/70">
                Our data centers are strategically located around the world to ensure low latency and fast connections
                for your users, regardless of their location.
              </p>
            </div>

            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-600/30 flex items-center justify-center mr-4">
                  <Lock className="h-6 w-6 text-amber-300" />
                </div>
                <h3 className="text-xl font-semibold text-white">Automated Backups</h3>
              </div>
              <p className="text-white/70">
                Regular automated backups ensure your data is always safe and can be quickly restored in case of any
                issues.
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Technical Specifications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Processors</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Latest generation Intel Xeon and AMD EPYC processors</li>
                  <li>Multiple CPU cores allocated based on your plan</li>
                  <li>Advanced CPU scheduling for optimal performance</li>
                  <li>Hardware-level virtualization for resource isolation</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Storage</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>High-speed NVMe SSD storage for all plans</li>
                  <li>RAID configuration for data redundancy</li>
                  <li>Regular disk health monitoring</li>
                  <li>Scalable storage options available</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Network</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Multiple tier-1 network providers</li>
                  <li>10 Gbps network interfaces</li>
                  <li>Advanced DDoS protection</li>
                  <li>Low-latency connections worldwide</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Security</h3>
                <ul className="list-disc pl-6 text-white/80 space-y-2">
                  <li>Enterprise-grade firewall protection</li>
                  <li>Intrusion detection and prevention systems</li>
                  <li>Regular security patches and updates</li>
                  <li>24/7 security monitoring</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Control Panel Features</h2>
            <p className="text-white/80 mb-6">
              Our intuitive control panel provides you with complete control over your hosting environment, allowing you
              to manage your services with ease.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Server Management</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• One-click OS reinstallation</li>
                  <li>• Power management (reboot, shutdown)</li>
                  <li>• Resource usage monitoring</li>
                  <li>• Console access</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Backup Management</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Scheduled automated backups</li>
                  <li>• One-click backup restoration</li>
                  <li>• Manual backup creation</li>
                  <li>• Backup download option</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Security Tools</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Firewall configuration</li>
                  <li>• SSH key management</li>
                  <li>• IP access control</li>
                  <li>• SSL certificate installation</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Monitoring</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Real-time resource usage graphs</li>
                  <li>• Performance analytics</li>
                  <li>• Alert notifications</li>
                  <li>• Historical usage data</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Billing & Account</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Invoice management</li>
                  <li>• Payment method updates</li>
                  <li>• Service upgrade options</li>
                  <li>• Usage reports</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-2">Support</h3>
                <ul className="text-white/70 space-y-1">
                  <li>• Ticket system</li>
                  <li>• Knowledge base access</li>
                  <li>• Live chat support</li>
                  <li>• System status updates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
