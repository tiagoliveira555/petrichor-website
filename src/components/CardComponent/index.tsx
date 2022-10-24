import {Card, ProjectLogo, ProjectName, ProjectDescription, ProjectInfos,ProjectButton} from "./styles"



export function CardComponent(){
    return (
        
        <Card>
            <ProjectName >Project Name</ProjectName>
            <ProjectDescription>PLorizzle ipsizzle dolizzle sit amet, yo adipiscing elit. Nullam boofron check it out, volutpizzle.</ProjectDescription>
            <ProjectInfos></ProjectInfos>
            <ProjectButton>Check it out  ›</ProjectButton>
        </Card>
        
    )
}