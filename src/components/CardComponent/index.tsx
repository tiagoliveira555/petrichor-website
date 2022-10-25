import {Card, ProjectLogo, ProjectName, ProjectDescription, ProjectInfos,ProjectButton, InfoText} from "./styles"
import {AiOutlineUsergroupAdd,AiOutlineEye} from 'react-icons/ai'

export function CardComponent(){
    return (
        
        <Card>
            <ProjectName >Project Name</ProjectName>
            <ProjectDescription>PLorizzle ipsizzle dolizzle sit amet, yo adipiscing elit. Nullam boofron check it out, volutpizzle.</ProjectDescription>
            
            <ProjectInfos>
                <AiOutlineUsergroupAdd size={28} fontWeight='700' color="#AEAEB2"></AiOutlineUsergroupAdd>
                <InfoText>127</InfoText>
                <AiOutlineEye size={28} fontWeight='700' color="#AEAEB2"></AiOutlineEye>
                <InfoText>34</InfoText>
            </ProjectInfos>
            <ProjectInfos style={{padding:"6px 0 0 0px"}}>
                <InfoText style={{padding:"0px 0px 0px 2px"}}>Contributors</InfoText>
                <InfoText style={{padding:"0px 0px 0px 22px"}}>Watching</InfoText>
            </ProjectInfos>
            
            <ProjectButton href="#">Check it out  ›</ProjectButton>
        </Card>
        
    )
}