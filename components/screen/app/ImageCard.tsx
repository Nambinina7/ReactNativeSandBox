import React from 'react';
import {CardContainer, CardContent} from "../../stylesComponents/ContainerScreenStyles";
import {Card, CardTitle} from "../../stylesComponents/CardScreenStyles"
import {CardButton, ButtonText} from "../../stylesComponents/ButtonScreenStyles"
import {CardImage} from "../../stylesComponents/ImageScreenStyles"
const ImageCard: React.FC = () => {
    const handlePress = () => {
        alert('Button Pressed!');
    };

    const cards = Array.from({ length: 10 }, (_, index) => (
        <Card key={index}>
            <CardImage source={require("../../assets/sea-turtle-8890529_640.jpg")}  />
            <CardTitle>Beautiful Landscape {index + 1}</CardTitle>
            <CardButton onPress={handlePress}>
                <ButtonText>View Details</ButtonText>
            </CardButton>
        </Card>
    ));

    return (
        <CardContainer contentContainerStyle={{ flexGrow: 1 }}>
            <CardContent>
                {cards}
            </CardContent>
        </CardContainer>
    );
};

export default ImageCard;
