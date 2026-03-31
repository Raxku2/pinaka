import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useNotification } from '../../../hooks';

const ProjectTile = ({ project = null }) => {

    const { popNotification } = useNotification();

    const [id, setId] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [thumbnailSource, setThumbnailSource] = useState(null);
    const [ratings, setRatings] = useState(null);
    const [tags, setTags] = useState([]);
    const [repo, setRepo] = useState(null);
    const [deployment, setDeployment] = useState(null);
    const [contributor, setContributor] = useState(null);


    useEffect(() => {
        // console.log(project);

        if (project.id && project.id != null) {
            setId(project.id);
        } else {
            setId(null);
        }


        if (project.title && project.title != null) {
            setTitle(project.title);
        } else {
            setTitle(null);
        }


        if (project.description && project.description != null) {
            setDescription(project.description);
        } else {
            setDescription(null);
        }



        if (project.thumbnail && project.thumbnail != null) {
            setThumbnailSource(project.thumbnail);
        } else {
            setThumbnailSource(null);
        }


        if (project.ratings && project.ratings != null) {
            setRatings(project.ratings);
        } else {
            setRatings(null);
        }


        if (project.tags && project.tags != null) {
            setTags(project.tags);
        } else {
            setTags(null);
        }


        if (project.repo && project.repo != null) {
            setRepo(project.repo);
        } else {
            setRepo(null);
        }


        if (project.deployment && project.deployment != null) {
            setDeployment(project.deployment);
        } else {
            setDeployment(null);
        }


        if (project.contributors && project.contributors != null) {
            setContributor(project.contributors);
        } else {
            setContributor(null);
        }


    }, [project]);

    const handelDeploymentRedirect = () => {
        window.open(deployment, '_blank', 'noopener,noreferrer')
    };

    const handelRepoRedirect = () => {
        window.open(repo, '_blank', 'noopener,noreferrer')
    };

    const handelProjectInfoOpen = () => {
        popNotification({ message: "This Feature is Not Available yet", status: "error" });
    };

    return (
        <div class="w-full bg-surface-container-low rounded-xl clay-card p-4 group transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl h-full flex flex-col">

            <div class="relative aspect-video rounded-lg overflow-hidden mb-8 bg-surface-container-highest shrink-0">
                <img class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={thumbnailSource} hidden={!thumbnailSource} />

                <span class="w-full h-full object-cover transition-all duration-700 flex justify-center items-center" hidden={thumbnailSource}>
                    <span class="text-8xl font-black clay-text-puffy clay-text">
                        Pinaka
                    </span>
                </span>

                <div class="absolute inset-0 bg-linear-to-t from-surface-container-low/80 to-transparent opacity-60"></div>
            </div>

            <div class="px-4 pb-4 flex flex-col flex-1">
                
                <div class="flex justify-between items-start mb-4 gap-4">


                    <div class="flex-1 min-w-0">
                        
                        <h3
                            class="text-3xl font-bold mb-2 line-clamp-2 wrap-break-word"
                            title={title}
                        >
                            {title}
                        </h3>


                        <p
                            class="text-on-surface-variant text-lg line-clamp-2 md:line-clamp-3 wrap-break-word"
                            title={description}
                        >
                            {description}
                        </p>
                    </div>

                    <div class="flex items-center gap-1 bg-amber-400/10 text-amber-300 px-3 py-1 rounded-full text-sm font-bold border border-amber-400/20 shrink-0">
                        <span class="material-symbols-outlined text-sm" style="font-variation-settings: 'FILL' 1;">star</span>
                        {ratings}
                    </div>
                </div>

                <div class="flex flex-wrap gap-2 mb-8">
                    {tags.slice(0, 3).map((tag, index) => (
                        <span class="px-4 py-1.5 rounded-full bg-surface-container-highest text-secondary text-xs font-bold tracking-wider uppercase"
                            key={index}
                        >{tag}</span>
                    ))}
                </div>

                <div class="flex items-center justify-between pt-6 mt-auto border-t border-outline-variant/10">
                    <div class="flex gap-3">
                        <button class="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:text-primary transition-all clay-button-secondary active:scale-90 cursor-pointer"
                            hidden={!repo}
                            onClick={handelRepoRedirect}
                        >
                            <span class="material-symbols-outlined">menu_book</span>
                        </button>

                        <button class="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container-high text-on-surface hover:text-primary transition-all clay-button-secondary active:scale-90 cursor-pointer"
                            hidden={!deployment}
                            onClick={handelDeploymentRedirect}
                        >
                            <span class="material-symbols-outlined">rocket_launch</span>
                        </button>
                    </div>

                    <button class="px-8 py-3 rounded-full bg-primary text-on-primary font-bold clay-button-primary hover:scale-105 transition-transform active:scale-95"
                        onClick={handelProjectInfoOpen}
                    >
                        More Info
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectTile;