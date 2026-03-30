import { h, Component } from 'preact';

const PrimimumBg = () => {
    return (

        <div class="mesh-gradient-container">
            <div class="blob w-[600px] h-[600px] bg-teal-500 top-[-10%] left-[-10%]" style="animation-delay: 0s;"></div>
            <div class="blob w-[500px] h-[500px] bg-sky-500 bottom-[10%] right-[5%]" style="animation-delay: -5s;"></div>
            <div class="blob w-[700px] h-[700px] bg-magenta-500 top-[20%] right-[-10%] bg-pink-500" style="animation-delay: -10s;"></div>
            <div class="blob w-[400px] h-[400px] bg-amber-500 bottom-[-5%] left-[20%]" style="animation-delay: -15s;"></div>
            <div class="blob w-[550px] h-[550px] bg-emerald-500 top-[40%] left-[30%]" style="animation-delay: -7s;"></div>
        </div>
    );
};

export default PrimimumBg;