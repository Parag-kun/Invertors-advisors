import Image from "next/image";
import { Poppins } from "next/font/google";
import { Fragment } from "react";

const poppins = Poppins({ weight: '500', subsets: ['latin'] });

const FeaturedCompanies = () => {
    return (
        <Fragment>
            <div className={`${poppins.className} mt-2 pl-6 max-[600px]:hidden max-[1000px]:text-lg text-xl font-medium text-red-500`}>FEATURED COMPANIES</div>
            <div className="max-[600px]:h-10 h-16 bg-blue-50 flex max-[600px]:gap-[120px] gap-[180px] items-center overflow-hidden">
                <div className="flex items-center max-[600px]:gap-[120px] gap-[180px] max-[600px]:animate-[slide_20s_infinite_linear] animate-[slide_20s_infinite_linear]">
                    <Image src={'/capriglobal-logo.png'} width={150} height={80} alt="Capriglobal" className="max-[600px]:hidden"/>
                    <Image src={'/capriglobal-logo.png'} width={100} height={80} alt="Capriglobal" className="min-[600px]:hidden"/>

                    <Image src={'/ganesh-housing-logo.png'} width={120} height={80} alt="Ganesh Housing" className="max-[600px]:hidden"/>
                    <Image src={'/ganesh-housing-logo.png'} width={80} height={60} alt="Ganesh Housing" className="min-[600px]:hidden"/>

                    <Image src={'/fino-logo.png'} width={180} height={80} alt="Fino Payments Bank" className="max-[600px]:hidden"/>
                    <Image src={'/fino-logo.png'} width={120} height={80} alt="Fino Payments Bank" className="min-[600px]:hidden"/>

                    <Image src={'/gravita-logo.png'} width={180} height={80} alt="Gravita" className="max-[600px]:hidden"/>
                    <Image src={'/gravita-logo.png'} width={120} height={80} alt="Gravita" className="min-[600px]:hidden"/>

                    <Image src={'/hira-logo.png'} width={120} height={80} alt="Hira" className="max-[600px]:hidden"/>
                    <Image src={'/hira-logo.png'} width={80} height={80} alt="Hira" className="min-[600px]:hidden"/>

                    <Image src={'/data-patterns.png'} width={150} height={80} alt="Data Patterns" className="max-[600px]:hidden"/>
                    <Image src={'/data-patterns.png'} width={100} height={60} alt="Data Patterns" className="min-[600px]:hidden"/>

                    <Image src={'/capriglobal-logo.png'} width={150} height={80} alt="Capriglobal" className="max-[600px]:hidden"/>
                    <Image src={'/capriglobal-logo.png'} width={100} height={80} alt="Capriglobal" className="min-[600px]:hidden"/>

                    <Image src={'/ganesh-housing-logo.png'} width={120} height={80} alt="Ganesh Housing" className="max-[600px]:hidden"/>
                    <Image src={'/ganesh-housing-logo.png'} width={80} height={60} alt="Ganesh Housing" className="min-[600px]:hidden"/>

                    <Image src={'/fino-logo.png'} width={180} height={80} alt="Fino Payments Bank" className="max-[600px]:hidden"/>
                    <Image src={'/fino-logo.png'} width={120} height={80} alt="Fino Payments Bank" className="min-[600px]:hidden"/>

                    <Image src={'/gravita-logo.png'} width={180} height={80} alt="Fino Payments Bank" className="max-[600px]:hidden"/>
                    <Image src={'/gravita-logo.png'} width={120} height={80} alt="Fino Payments Bank" className="min-[600px]:hidden"/>

                    <Image src={'/hira-logo.png'} width={120} height={80} alt="Fino Payments Bank" className="max-[600px]:hidden"/>
                    <Image src={'/hira-logo.png'} width={80} height={80} alt="Fino Payments Bank" className="min-[600px]:hidden"/>

                    <Image src={'/data-patterns.png'} width={150} height={80} alt="Fino Payments Bank" className="max-[600px]:hidden"/>
                    <Image src={'/data-patterns.png'} width={100} height={80} alt="Fino Payments Bank" className="min-[600px]:hidden"/>
                </div>
            </div>
        </Fragment>
    );
};

export default FeaturedCompanies;
