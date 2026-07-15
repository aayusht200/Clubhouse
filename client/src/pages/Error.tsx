import { useNavigate } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Error() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col gap-10 ">
            <header className="shadow bg-amber-200 flex items-center p-4">
                <div className="left-header">
                    <h1
                        className="font-bold text-lg md:text-xl lg:text-2xl cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        Clubhouse
                    </h1>
                </div>
            </header>
            <DotLottieReact
                src="/Error 404.lottie"
                loop
                autoplay
                className="h-60 md:h-100
             lg:h-120 lg:w-240 place-self-center aspect-square"
            />
            <button
                type="button"
                onClick={() => navigate('/')}
                className="border rounded-2xl px-3 text-lg md:text-xl lg:text-2xl hover:bg-amber-500 cursor-pointer w-fit place-self-center"
            >
                Go Back
            </button>
        </div>
    );
}
