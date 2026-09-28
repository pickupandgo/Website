import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-[#f7f9ff]">
      <div className="max-w-md w-full text-center bg-[#ffffff] p-8 rounded-3xl shadow-md border border-[#c7c5cd]/30 space-y-4">
        <div className="w-16 h-16 rounded-2xl bg-[#e2dfff] text-[#544ec2] flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-3xl">wrong_location</span>
        </div>

        <span className="font-code-waybill text-xs px-3 py-1 rounded-full bg-[#f1f3f9] text-[#544ec2] font-bold">
          ERROR 404 · ROUTE NOT FOUND
        </span>

        <h1 className="font-headline text-2xl font-bold text-[#181c20]">
          Waybill Not Found Along the Route
        </h1>

        <p className="text-xs sm:text-sm text-[#46464c] leading-relaxed">
          The requested page or waypoint does not exist on the MultipleRide dispatch network. Please check the URL or return to our core routes below.
        </p>

        <div className="pt-2 flex flex-col gap-2">
          <Link
            to="/"
            className="w-full py-3 rounded-xl bg-[#050719] text-[#ffffff] font-headline text-xs font-bold hover:bg-[#181a2d] transition-all shadow-sm"
          >
            Return to Homepage
          </Link>
          <Link
            to="/services"
            className="w-full py-2.5 rounded-xl bg-[#eceef4] text-[#181c20] font-headline text-xs font-semibold hover:bg-[#e0e2e8] transition-all"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </div>
  );
}
