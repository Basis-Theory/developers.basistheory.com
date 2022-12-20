var _iub = _iub || [];
_iub.csConfiguration = {
  ccpaAcknowledgeOnLoad: true,
  consentOnContinuedBrowsing: false,
  countryDetection: true,
  gdprAppliesGlobally: false,
  lang: "en",
  siteId: 2378844,
  cookiePolicyId: 13137791,
  callback: {
    onPreferenceExpressedOrNotNeeded: function (preference) {
      dataLayer.push({ iubenda_ccpa_opted_out: _iub.cs.api.isCcpaOptedOut() });
      if (!preference) {
        dataLayer.push({ event: "iubenda_preference_not_needed" });
      } else {
        if (preference.consent === true) {
          dataLayer.push({ event: "iubenda_consent_given" });
        } else if (preference.consent === false) {
          dataLayer.push({ event: "iubenda_consent_rejected" });
        } else if (preference.purposes) {
          for (var purposeId in preference.purposes) {
            if (preference.purposes[purposeId]) {
              dataLayer.push({
                event: "iubenda_consent_given_purpose_" + purposeId,
              });
            }
          }
        }
      }
    },
  },
  banner: {
    acceptButtonCaptionColor: "#070a1b",
    acceptButtonColor: "#1ad1db",
    acceptButtonDisplay: true,
    backgroundColor: "#141729",
    closeButtonDisplay: false,
    customizeButtonCaptionColor: "#d2d2d2",
    customizeButtonColor: "#1a1e32",
    customizeButtonDisplay: true,
    position: "bottom",
    rejectButtonCaptionColor: "white",
    rejectButtonColor: "#1e2337",
    rejectButtonDisplay: true,
    textColor: "#e5e6ec",
    acceptButtonCaption: "Accept All",
    content:
      '<link rel="preconnect" href="https://fonts.googleapis.com" />\n<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />\n<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />\n<div id="iubenda-cs-title">&#x1f36a;  &nbsp;Cookie Notice</div><div id="iubenda-cs-paragraph">\n\nBy clicking "Accept All", you agree to the storing of cookies on your device to enhance site navigation, analyze site usage, and assist in our marketing efforts. View our <a href="https://basistheory.com/privacy-policy" target="_blank">Cookie Policy</a> for more information.\n</div>',
    rejectButtonCaption: "",
  },
};
