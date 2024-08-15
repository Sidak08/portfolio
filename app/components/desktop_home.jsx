import Image from "next/image";
import styles from "./desktop_home.module.css";

export default function DesktopHome() {
  return (
    <section className="w-full h-screen bg-[#0A0F13]">
      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex items-center justify-evenly">
          <Image src="/home-profile.png" height={412} width={413} />
          <div>
            <div className={`${styles.myName}`}>My Name </div>
            <div className={`${styles.isSidak}`}>Is SidaK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
