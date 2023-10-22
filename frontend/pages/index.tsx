import Head from 'next/head'
import SectionTitle from '../components/SectionTitle'
import Menu from '../components/Menu'
import Image from 'next/image'
import Banner from '../components/Banner'
import CenteredContainer  from '../components/CenteredContainer'
import Card from '../components/Card'

const Home = () => {
    return (
        <>
            <Head>
            <title>DCollaborate</title>
            <meta
                name="description"
                content="DCollaborate"
            />
            <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="">
                <div className=" -z-10">
                    <Image
                        style={{
                            maxHeight: 400,
                          }}
                        alt="background image"
                        src="/images/background.jpg"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <Menu />
                <Banner /> 
            </div>

            <div>
                <SectionTitle
                    title="Scoring of DAOs and members">
                    The base of our DAPP lies on an algorithm that generates a scoring of allied DAOs and its members to with                   
                    ensre that the most reputable members of a DAO have access to favorable interest rates and more attractive
                    lending conditions which can encourage greater participation and collaboration. Likewise, by highlighting
                    trusted DAOs and members, the project can promote the creation of stronger and more collaborative alliances. 
                    This increases the probability of success in joint activities, workshops and events as well as can help measure 
                    and manage the risks associated with financial operations between DAOs and their members
                </SectionTitle> 
                  
                <SectionTitle  title="We created a global pool between DAOs to offer">
                    Get collateralized loans with the best collateral rate vs. loaned funds in the market for its members with the best reputation.

                    The option to create a multi-signature between DAOs to create alliances for different activities, workshops and/or events.

                </SectionTitle>

            </div>
           
            <CenteredContainer>
                <div className="columns-2">
                    <Card title="Comunity Recognition"image={'/images/full-world.jpeg'}/>
                    <Card title="Web3 Activity" image={'/images/half-world.jpeg'}/>
                </div>
            </CenteredContainer>
    </>       
    );
}

export default Home;
