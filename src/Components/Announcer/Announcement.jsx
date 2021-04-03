import React from "react";
import notif_logo from "../../assets/Logoes/notifiction-Logoo.png";


function Announcement ( props){

    return(
        <Announcement
            title="به کجایی خوش آمدید"
            subtitle="نظرات و پیشنهادات خود را با ما در میان بگذارید"
            link=""
            imageSource={notif_logo}
            daysToLive={3}
            secondsBeforeBannerShows={5}
            closeIconSize={30}
            animateInDuration={1000}
            animateOutDuration={500}
        />

    );
}
export default Announcement