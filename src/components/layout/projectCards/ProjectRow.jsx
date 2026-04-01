import { h, Component } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { useNotification } from '../../../hooks';
import { useProjectDomainIconStore } from '../../../stores';

const ProjectRow = ({ project }) => {

    const { iconMap } = useProjectDomainIconStore();
    const { popNotification } = useNotification();

    const [id, setId] = useState(null);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);
    const [tags, setTags] = useState([]);
    const [repo, setRepo] = useState(null);
    const [deployment, setDeployment] = useState(null);
    const [domain, setDomain] = useState('code');


    useEffect(() => {
        // console.log(project);

        if (project.id && project.id != "") {
            setId(project.id);
        } else {
            setId(null);
        }


        if (project.title && project.title != "") {
            setTitle(project.title);
        } else {
            setTitle(null);
        }


        if (project.description && project.description != "") {
            setDescription(project.description);
        } else {
            setDescription(null);
        }


        if (project.tags && project.tags != []) {
            setTags(project.tags);
        } else {
            setTags([]);
        }


        if (project.repo && project.repo != "") {
            setRepo(project.repo);
        } else {
            setRepo(null);
        }


        if (project.deployment && project.deployment != "") {
            setDeployment(project.deployment);
        } else {
            setDeployment(null);
        }


        if (project.domain && project.domain != "") {
            console.log(project.domain);
            
            setDomain(iconMap[project.domain]);
        } else {
            setDomain('code');
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
        <div class="w-full bg-surface-container-low hover:bg-surface-container-high rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-500 clay-card group">
            <div class="flex items-center gap-6 w-full md:w-1/3">
                <div class="w-14 h-14 shrink-0 bg-surface-container-highest rounded-full flex items-center justify-center text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-on-primary">


                    {/* fullstack */}
                    {/* <span class="material-symbols-outlined">layers</span> */}
                    {/* frontend */}
                    {/* <span class="material-symbols-outlined">web</span> */}
                    {/* backend */}
                    {/* <span class="material-symbols-outlined">dns</span> */}
                    {/* database */}
                    {/* <span class="material-symbols-outlined">database</span> */}
                    {/* api */}
                    {/* <span class="material-symbols-outlined">api</span> */}
                    {/* cli */}
                    {/* <span class="material-symbols-outlined">terminal</span> */}
                    {/* gui  */}
                    {/* <span class="material-symbols-outlined">web_asset</span> */}
                    {/* tui  */}
                    {/* <span class="material-symbols-outlined">wysiwyg</span> */}
                    {/* Services  */}
                    {/* <span class="material-symbols-outlined">smart_toy</span> */}
                    {/* iot  */}
                    {/* <span class="material-symbols-outlined">devices_other</span> */}
                    {/* electronics  */}
                    <span class="material-symbols-outlined">{domain}</span>


                </div>
                <div>
                    <h4 class="text-xl font-bold">{title}</h4>
                    <p class="text-on-surface-variant text-sm line-clamp-1">{description}.</p>
                </div>
            </div>
            <div class="flex flex-wrap gap-2 w-full md:w-1/3 justify-center">



                {tags.slice(0, 5).map((tag, index) => (
                    <span class="px-3 py-1 rounded-full border border-outline-variant text-[10px] font-bold tracking-widest text-on-surface-variant uppercase" key={index}>{tag}</span>
                ))}



            </div>
            <div class="flex gap-4 w-full md:w-auto justify-end">
                <button class="px-5 py-2 rounded-full text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"
                    onClick={handelRepoRedirect}>
                    <span class="material-symbols-outlined text-lg">code_blocks</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Github</span>
                </button>
                <button class="px-5 py-2 rounded-full text-on-surface-variant hover:text-on-surface transition-colors flex items-center gap-2"
                    onClick={handelDeploymentRedirect}>
                    <span class="material-symbols-outlined text-lg">rocket</span>
                    <span class="text-xs font-bold uppercase tracking-widest">Deploy</span>
                </button>



                <button class="px-6 py-2 rounded-full bg-surface-container-highest text-on-surface font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all clay-button-secondary"
                    onClick={handelProjectInfoOpen}
                >
                    View Info
                </button>
            </div>
        </div>
    );
};

export default ProjectRow;