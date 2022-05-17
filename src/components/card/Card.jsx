
import { useScroll } from "@use-gesture/react";
import axios from "axios";
import { useState, useEffect} from "react";
import { animated, useSpring } from "react-spring";
import corazon from "./img/corazon.jpg";
import corazonbonito from "./img/corazonbonito.jpg";
import "./styles.scss";
import confetti from "canvas-confetti";
import { Card as CardNextUI, Col, Row, Button, Text } from "@nextui-org/react";
const clamp = (value, clampAt) => {
    if (value > 0) {
      return value > clampAt ? clampAt : value;
    } else {
      return value < -clampAt ? -clampAt : value;
    }
  };

  

  const movies = [
    corazon,
      corazonbonito,
      corazon,
      corazonbonito,
      corazon,
      corazonbonito,
      corazon,
        corazonbonito,
  ];

const TodowishList = [
    {
        id: 1,
        title: "Titulo 1",
        description: "Descripcion 1",
        image: corazon,
        tags: ["tag1", "tag2", "tag3"],
    },
    {
        id: 2,
        title: "Titulo 2",
        description: "Descripcion 2",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 3,
        title: "Titulo 3",
        description: "Descripcion 3",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 4,
        title: "Titulo 4",
        description: "Descripcion 4",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 5,
        title: "Titulo 5",
        description: "Descripcion 5",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 6,
        title: "Titulo 6",
        description: "Descripcion 6",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]

    },
    {
        id: 7,
        title: "Titulo 7",
        description: "Descripcion 7",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 8,
        title: "Titulo 8",
        description: "Descripcion 8",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 9,
        title: "Titulo 9",
        description: "Descripcion 9",
        image: corazon,
        tags:["tag1", "tag2", "tag3"]
    },
    {
        id: 10,
        title: "Titulo 10",
        description: "Descripcion 10",
        image: corazonbonito,
        tags:["tag1", "tag2", "tag3"]
    },

  ]
export const Card = () => {
    const bind = useScroll(event => {
        set({
          transform: `perspective(500px) rotateY(${
            event.scrolling ? clamp(event.delta[0]) : 0
          }deg)`
        });
    });
    
    const [style, set] = useSpring(() => ({
        // transorm and make the card bigger

        transform: `perspective(500px) rotateY(0deg)`,

        
    }));
    const [randomImage, setrandomImage] = useState([
        corazon,
        corazonbonito,
        
    ])

    
  return (
      <>
          <div className="container" {...bind()}
          
          >
        {TodowishList.map(wishlist => (
          <animated.div
            key={wishlist.id}
            className="card"
            style={{
                ...style,
               //make a random background color
                // backgroundImage: `url(${src})`,
                }}
            >
                <CardNextUI
                    cover css={{
                        w: "100%", p: 0,
                    }}
                >
                    <CardNextUI.Header
                    css={{  position: "absolute", zIndex: 1, top: 5 }}
                    >
                         <Col>
        <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
            {wishlist.title}	
        </Text>
        <Text h3 color="white">
            {wishlist.description}
        </Text>
      </Col>
                    </CardNextUI.Header>
                    <CardNextUI.Body>
                        <CardNextUI.Image
                            src={wishlist.image}
                            height={300}
                            width={"100%"}
                            cover
                            alt="Card image cap"
                        />
                    </CardNextUI.Body>
                    <CardNextUI.Footer
                          blur
      css={{
        position: "absolute",
        bgBlur: "#0f1114",
        borderTop: "$borderWeights$light solid $gray700",
        bottom: 0,
        zIndex: 1,
      }}
                    >
                        <Row>
                            <Col>
                                <Row>
                                    <Col span={3}>
                                        <CardNextUI.Image
                                            src={wishlist.image}
                                            css={{ background: "black" }}
                height={40}
                width={40}
                alt="Breathing app icon"
              />
                                    </Col>
                                </Row>
                            </Col>
                            
                            <Col>
                                <Row justify="flex-end">
                                    
                                    {wishlist.tags.map(tag => (
                                        <Button
                                            flat
                                            auto
                                            rounded
                                            css={{
                                                color: "#94f9f0",
                                                bg: "#94f9f026",
                                                margin: "0 5px",
                                            }}
                                            onClick={() => {
                                                confetti({
                                                    zIndex: 999,
                                                    particleCount: 200,
                                                    spread: 400,
                                                    angle: -100,
                                                    origin: {
                                                        x: Math.random(),
                                                        y: Math.random(),
                                                    }
                                                })
                                            }
                                            }
                                        >
                                            <Text
                                                css={{
                                                    color: "inherit"
                                                
                                                }}
                                                size={12}
                                                weight="bold"
                                                transform="uppercase"
                                            >
                                                {tag}
                                            </Text>
                                        </Button>
                                    ))}
                                        
            
          </Row>
        </Col>

                        </Row>

                    </CardNextUI.Footer>
                </CardNextUI>
                
          </animated.div>
        ))}
      </div>
    </>
  )
}
