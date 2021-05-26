import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
            <Section
            title="Model S"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-s.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
            />
            <Section
            title="Model Y"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-y.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
            />
            <Section
            title="Model 3"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "model-3.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Existing inventory"
            />
            <Section 
            title="Lowest Cost Solar Panels in America"
            description = "Order Online for Touchless Delivery"
            backgroundImg = "solar-panel.jpg"
            leftBtnText = "Custom Order"
            rightBtnText = "Learn More"
            />
            <Section 
            title="Solar for New Roofs"
            description = " Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg = "solar-roof.jpg"
            leftBtnText = "Shop Now"
            rightBtnText = "Learn More"
            />
            <Section
            title="Accessories"
            description = ""
            backgroundImg = "accessories.jpg"
            leftBtnText = "Shop Now"
            
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
`
