import { Link } from "react-router-dom";
import { MainLayout } from "../../components/layout";
import { Button } from "../../components/ui/button";

export const ApplicationSuccess = (): JSX.Element => {
  return (
    <MainLayout>
      <div className="mx-auto max-w-[850px] w-full px-6 py-20">
        <div className="bg-white rounded-2xl shadow-[0px_2px_25px_#000e331a] p-12 flex flex-col items-center text-center">
          
          <div className="mb-6">
            <img className=" h-52" src="/pendaftaran-success.png" alt="Pendaftaran Berhasil" />
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#333] mb-4">Pendaftaran Berhasil</h1>

          {/* Description */}
          <p className="text-[#333] text-base mb-2 max-w-[500px]">
            Kami telah menerima pendaftaranmu. Silakan cek status pendaftaran secara berkala.
          </p>

          {/* CTA Button */}
          <Button 
            asChild
            className="mt-8 h-12 px-8 bg-[#069dd8] hover:bg-[#069dd8]/90 rounded-[25px] text-white font-medium"
          >
            <Link to="/profile">Lihat Status Pendaftaran</Link>
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApplicationSuccess;
