import React from "react";

const Mapx = () => {
  return (
    <div className="p-8 bg-[#FAFAFA] rounded-xl shadow-xl">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.767720291701!2d77.06163729200534!3d28.49782043272471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19747a8d3e09%3A0x8ad4fe3ebbddf1f!2sGali%20Number%202%20%26%20Satguru%20Enclave%20Rd%2C%20Palam%20Vihar%20Extension%2C%20Gurugram%2C%20Haryana%20122022!5e0!3m2!1sen!2sin!4v1731864260006!5m2!1sen!2sin"
        width="600"
        height="450"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe> */}
      <div className="mb-10 text-2xl font-bold tracking-wider text-center underline">Get us on Google Map</div>
      <div className="border border-gray-300 rounded overflow-hidden">
        <iframe
          className="h-[21rem]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7012.796052196095!2d77.0615309!3d28.4976702!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1947e8ec1fa9%3A0x3cfb42ab5b9161f1!2sPIZZA%20DELITE!5e0!3m2!1sen!2sin!4v1731864686230!5m2!1sen!2sin"
          width="600"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Mapx;
