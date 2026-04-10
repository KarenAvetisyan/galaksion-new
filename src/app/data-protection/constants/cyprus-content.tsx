import { SectionHeadline, SectionText } from '@components/ui/section';
import { Table, TableBody, TableCell, TableRow } from '@components/ui/table';
import React from 'react';

const CyprusContent = () => {
    return (
        <>
            <div>
                <SectionText>
                    This Data Protection Addendum ("Addendum" or “DPA”) forms
                    part of the Agreement ("Principal Agreement") between: (i)
                    ____________ ("Customer") and (ii) Galaksion LTD
                    ("Company").
                </SectionText>
                <SectionText>
                    The terms used in this Addendum shall have the meanings set
                    forth in this Addendum. Capitalized terms not otherwise
                    defined herein shall have the meaning given to them in the
                    Principal Agreement. Except as modified below, the terms of
                    the Principal Agreement shall remain in full force and
                    effect. In consideration of the mutual obligations set out
                    herein, the parties hereby agree that the terms and
                    conditions set out below shall be added as an Addendum to
                    the Principal Agreement. Except where the context requires
                    otherwise, references in this Addendum to the Principal
                    Agreement are to the Principal Agreement as amended by, and
                    including, this Addendum.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="defin">1. DEFINITIONS</SectionHeadline>
                <SectionText>
                    1.1 In this Addendum, the following terms shall have the
                    meanings set out below and cognate terms shall be construed
                    accordingly:
                </SectionText>
                <SectionText>
                    "Applicable Laws" means (a) European Union or Member State
                    laws with respect to any Company Personal Data; and (b) any
                    other applicable law with respect to any Company Personal
                    Data;
                </SectionText>
                <SectionText>
                    "Company Personal Data" means any Personal Data Processed by
                    a Contracted Processor on behalf of Company pursuant to or
                    in connection with the Principal Agreement;
                </SectionText>
                <SectionText>
                    "Customer Personal Data" means any Personal Data Processed
                    by a Contracted Processor on behalf of Customer pursuant to
                    or in connection with the Principal Agreement;
                </SectionText>
                <SectionText>
                    "Contracted Processor" means Company, Customer or a
                    Subprocessor;
                </SectionText>
                <SectionText>
                    "Subprocessor" means any third-party processor appointed by
                    or on behalf of the parties (or by any other Subprocessor
                    appointed by the parties) to Process Personal Data on behalf
                    of either the Company and/or Customer in connection with the
                    Principal Agreement.
                </SectionText>
                <SectionText>
                    "Data Protection Laws" means EU Data Protection Laws and, to
                    the extent applicable, the data protection or privacy laws
                    of any other country;
                </SectionText>
                <SectionText>
                    "EEA" means the European Economic Area;
                </SectionText>
                <SectionText>
                    "EU Data Protection Laws" means EU Directive 95/46/EC, as
                    transposed into domestic legislation of each Member State
                    and as amended, replaced or superseded from time to time,
                    including by the GDPR and laws implementing or supplementing
                    the GDPR;
                </SectionText>
                <SectionText>
                    "GDPR" means EU General Data Protection Regulation 2016/679;
                </SectionText>
                <SectionText>
                    "Restricted Transfer" means:
                    <br />
                    a transfer of Company Personal Data from Company to a
                    Contracted Processor; or
                    <br />
                    an onward transfer of Company Personal Data from a
                    Contracted Processor to a Contracted Processor, or between
                    two establishments of a Contracted Processor, in each case,
                    where such transfer would be prohibited by Data Protection
                    Laws (or by the terms of data transfer agreements put in
                    place to address the data transfer restrictions of Data
                    Protection Laws) in the absence of a mechanism as approved
                    by the European Commission to ensure adequate safeguards for
                    Personal Data transferred from the EU to countries which the
                    European Commission has not found to offer adequate
                    protection for personal data;
                </SectionText>
                <SectionText>
                    "Services" means the services and other activities to be
                    supplied to or carried out by or on behalf both the Customer
                    and Company pursuant to the Principal Agreement;
                </SectionText>
                <SectionText>
                    “Principle Agreement” means the customer’s Insertion Order
                    combined with the Company’s Terms and Conditions and Privacy
                    Policy.
                </SectionText>
                <SectionText>
                    1.2. The terms, "Commission", "Controller", "Data Subject",
                    "Member State", "Personal Data", "Personal Data Breach",
                    "Processing" and "Supervisory Authority" shall have the same
                    meaning as in the GDPR, and their cognate terms shall be
                    construed accordingly.
                </SectionText>
                <SectionText>
                    1.3. The word "include" shall be construed to mean include
                    without limitation, and cognate terms shall be construed
                    accordingly.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="int">2. INTRODUCTION</SectionHeadline>
                <SectionText>
                    2.1 This DPA reflect the parties’ agreement on the
                    processing of Personal Data in connection with the Data
                    Protection Laws.
                </SectionText>
                <SectionText>
                    2.2 Any ambiguity in this DPA shall be resolved to permit
                    the parties to comply with all Data Protection Laws.
                </SectionText>
                <SectionText>
                    2.3 In the event and to the extent that the Data Protection
                    Laws impose stricter obligations on the parties than under
                    this DPA, the Data Protection Laws shall prevail.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="appl">
                    3. APPLICATION OF THIS DPA
                </SectionHeadline>
                <SectionText>
                    3.1 This DPA will only apply to the extent all of the
                    following conditions are met:
                </SectionText>
                <SectionText>
                    3.1.1 Company (or a Subprocessor on its behalf) processes
                    Personal Data that is made available by the Customer in
                    connection with the Principal Agreement.
                </SectionText>
                <SectionText>
                    3.1.2 Customer (or a Subprocessor on its behalf) processes
                    Personal Data that is made available by the Company in
                    connection with the Principal Agreement.
                </SectionText>
                <SectionText>
                    3.1.3 The Data Protection Laws applies to the processing of
                    Personal Data.
                </SectionText>
                <SectionText>
                    3.1.4 This DPA will only apply to the Services for which the
                    parties agreed to in the Agreement, which incorporates the
                    DPA by reference.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="data">
                    4. PROCESSING OF PERSONAL DATA
                </SectionHeadline>
                <SectionText>
                    4.1{' '}
                    <span className="underline">Independent Controllers.</span>{' '}
                    Each party:
                </SectionText>
                <SectionText>
                    4.1.1 may act as an independent Controller of Personal Data
                    under the Data Protection Laws and as such, will
                    individually determine the purposes and means of its
                    processing of Personal Data; and
                </SectionText>
                <SectionText>
                    4.1.2 will comply with the obligations applicable to it
                    under the Data Protection Laws with respect to the
                    processing of Personal Data.
                </SectionText>
                <SectionText>
                    4.1.3 instruct the Contracted Processor (and authorise it to
                    instruct each Subprocessor) with respect to the processing
                    of its Personal Data and/or the transfer of Personal Data to
                    any country or territory, as reasonably necessary for the
                    provision of the Services and consistent with the Principal
                    Agreement.
                </SectionText>
                <SectionText>
                    4.2{' '}
                    <span className="underline">Contracted Processors.</span>{' '}
                    Each Party shall:
                </SectionText>
                <SectionText>
                    4.2.1 comply with all applicable Data Protection Laws in the
                    Processing of each other’s Personal Data; and
                </SectionText>
                <SectionText>
                    4.2.2 not Process each other’s Personal Data other than on
                    documented instructions unless Processing is required by
                    Applicable Laws to which the relevant Contracted is subject,
                    in which case it shall, to the extent permitted by
                    Applicable Laws, inform the other Party of that legal
                    requirement before the relevant Processing of that Personal
                    Data.
                </SectionText>
                <SectionText>
                    4.3 Annex 1 to this Addendum sets out certain information
                    regarding the Processing of the Personal Data as required by
                    article 28(3) of the GDPR (and, possibly, equivalent
                    requirements of other Data Protection Laws). Company may
                    make reasonable amendments to Annex 1 by written notice to
                    Customer from time to time as Company reasonably considers
                    necessary to meet those requirements. Nothing in Annex 1
                    (including as amended pursuant to this section 2.3) confers
                    any right or imposes any obligation on any party to this
                    Addendum.
                </SectionText>
                <SectionText>
                    4.4{' '}
                    <span className="underline">Sharing of Personal Data.</span>{' '}
                    In performing its obligations under the Principle Agreement,
                    a Party may provide Personal Data to the other Party. Each
                    party shall process Personal Data only for (i) the purposes
                    set forth in the Principle Agreement or as (ii) otherwise
                    agreed to in writing by the parties, provided such
                    processing strictly complies with (iii) Data Protection
                    Laws, (ii) Relevant Privacy Requirements and (iii) its
                    obligations under this DPA (the “Permitted Purposes”). Each
                    Party shall not knowingly share any Personal Data with the
                    other Party (i) that allows Data Subjects to be directly
                    identified (for example by reference to their name and
                    e-mail address); (ii) that contains Personal Data relating
                    to children under 13 years.
                </SectionText>
                <SectionText>
                    4.5{' '}
                    <span className="underline">
                        Lawful grounds and transparency.
                    </span>
                    Each Party shall maintain a publicly-accessible privacy
                    policy on its mobile apps and websites that is available via
                    a prominent link that satisfies transparency disclosure
                    requirements of Data Protection Laws. Each Party warrants
                    and represents that it has provided Data Subjects with
                    appropriate transparency regarding data collection and use
                    and all required notices and obtained any and all consents
                    or permissions necessary under Data Protection Laws. With
                    respect to processing Personal Data for cross Advertising
                    and/or in connection with collection of precise geo-location
                    data, each Party shall ensure that proper affirmative act of
                    consent from Data Subjects in accordance with Data
                    Protection Law and Relevant Privacy Requirements was given
                    in order for itself and the other Party to Process such
                    Personal Data as set out herein. The foregoing shall not
                    derogate from either Party’s responsibilities under the Data
                    Protection Laws (such as the requirement to provide
                    information to the data subject when the Personal Data in
                    connection with the processing of Personal Data). Both
                    parties will cooperate in good faith in order to identify
                    the information disclosure requirements and each party
                    hereby permits the other party to identify it in the other
                    party’s privacy policy, and to provide a link to the other
                    party’s privacy policy in its privacy policy.
                </SectionText>
                <SectionText>
                    4.6 <span className="underline">Data Subject Rights.</span>{' '}
                    It is agreed that where either party receives a request from
                    a Data Subject in respect of Personal Data controlled by
                    such Party, then such Party shall be responsible to exercise
                    the request, in accordance with Data Protection Laws.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="trans">
                    5. PERSONAL DATA TRANSFERS
                </SectionHeadline>
                <SectionText>
                    <span className="underline">
                        Transfers of Personal Data Out of the European Economic
                        Area.
                    </span>{' '}
                    Either party may transfer Personal Data outside the European
                    Economic Area if it complies with the provisions on the
                    transfer of Personal Data to third countries in the Data
                    Protection Laws (such as through the use model clauses or
                    transfer of Personal Data to jurisdictions as may be
                    approved as having adequate legal protections for data by
                    the European Commission).
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="sec">
                    6. SECURITY AND PROTECTION OF PERSONAL DATA
                </SectionHeadline>
                <SectionText>
                    The parties will provide a level of protection for Personal
                    Data that is at least equivalent to that required under Data
                    Protection Laws. Both parties shall implement appropriate
                    technical and organizational measures to protect the
                    Personal Data. In the event that a party suffers a confirmed
                    Security Incident, each party shall notify the other party
                    without undue delay and the parties shall cooperate in good
                    faith to agree and action such measures as may be necessary
                    to mitigate or remedy the effects of the Security Incident.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="subp">7. SUBPROCESSING</SectionHeadline>
                <SectionText>
                    7.1 Company authorises Customer (as a Contracted Processor)
                    to appoint (and permit each Subprocessor appointed in
                    accordance with this section to appoint) Subprocessors in
                    accordance with this section and any restrictions in the
                    Principal Agreement.
                </SectionText>
                <SectionText>
                    7.2 Customer may continue to use those Subprocessors already
                    engaged by Customer as of the date of this Addendum, subject
                    to Customer in each case as soon as practicable meeting
                    relevant the obligations set out in this Addendum.
                </SectionText>
                <SectionText>
                    7.3 Customer shall give Company prior written notice of the
                    appointment of any new Subprocessor, including full details
                    of the Processing to be undertaken by the Subprocessor. If,
                    within 30 days of receipt of that notice, Company notifies
                    Customer in writing of any objections (on reasonable
                    grounds) to the proposed appointment, Customer will not
                    appoint (nor disclose any Company Personal Data to) the
                    proposed Subprocessor except with the prior written consent
                    of Company.
                </SectionText>
                <SectionText>
                    7.4 With respect to each Subprocessor, Customer shall:
                </SectionText>
                <SectionText>
                    7.4.1 before the Subprocessor first Processes Company
                    Personal Data, carry out adequate due diligence to ensure
                    that the Subprocessor is capable of providing the level of
                    protection for Company Personal Data required by the
                    Principal Agreement;
                </SectionText>
                <SectionText>
                    7.4.2 ensure that the arrangement between on the one hand
                    (a) Customer, or (b) the relevant intermediate Subprocessor;
                    and on the other hand, the Subprocessor, is governed by a
                    written contract including terms which offer at least the
                    same level of protection for Company Personal Data as those
                    set out in this Addendum and meet the requirements of
                    article 28(3) of the GDPR;
                </SectionText>
                <SectionText>
                    7.4.3 if that arrangement involves a Restricted Transfer,
                    ensure the use of an approved mechanism for achieving
                    adequacy, and
                </SectionText>
                <SectionText>
                    7.4.4 provide to Company for review such copies of the
                    Contracted Processors' agreements with Subprocessors (which
                    may be redacted to remove confidential commercial
                    information not relevant to the requirements of this
                    Addendum) as Company may request from time to time.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="prot">
                    8. DATA PROTECTIONN IMPACT ASSESSMENT AND PRIOR CONSULTATION
                </SectionHeadline>
                <SectionText>
                    Customer shall provide reasonable assistance to Company with
                    any data protection impact assessments, and prior
                    consultations with Supervising Authorities or other
                    competent data privacy authorities, which Company reasonably
                    considers to be required by article 35 or 36 of the GDPR or
                    equivalent provisions of any other Data Protection Law, in
                    each case solely in relation to Processing of Company
                    Personal Data by, and taking into account the nature of the
                    Processing and information available to, the Contracted
                    Processors.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="del">
                    9. DELETION OR RETURN OF COMPANY PERSONAL DATA
                </SectionHeadline>
                <SectionText>
                    9.1 Subject to sections 9.2 and 9.3 Customer shall promptly
                    delete and procure the deletion of all copies of Company
                    Personal Data upon cessation of any Services involving the
                    Processing of Company Personal Data.
                </SectionText>
                <SectionText>
                    9.2 Each Contracted Processor may retain Company Personal
                    Data to the extent required by Applicable Laws and only to
                    the extent and for such period as required by Applicable
                    Laws and always provided that Customer shall ensure the
                    confidentiality of all such Company Personal Data and shall
                    ensure that such Company Personal Data is only Processed as
                    necessary for the purpose(s) specified in the Applicable
                    Laws requiring its storage and for no other purpose.
                </SectionText>
                <SectionText>
                    9.3 Customer shall provide written certification to Company
                    that it has fully complied with this section 10.
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="lia">10. LIABILITY</SectionHeadline>
                <SectionText>
                    Notwithstanding anything else in the Agreement, the total
                    liability of either party towards the other party under or
                    in connection with this DPA will be limited to the maximum
                    monetary or payment-based amount at which that party’s
                    liability is capped under the Agreement (for clarity, any
                    exclusion of indemnification claims from the Agreement’s
                    limitation of liability will not apply to indemnification
                    claims under the Agreement relating to the Data Protection
                    Laws).
                </SectionText>
            </div>
            <div>
                <SectionHeadline id="gen">
                    11. GENERAL TERMS GOVERNING LAW AND JURISDICTION
                </SectionHeadline>
                <SectionText>
                    11.1.1 the parties to this Addendum hereby submit to the
                    choice of jurisdiction stipulated in the Principal Agreement
                    with respect to any disputes or claims howsoever arising
                    under this Addendum, including disputes regarding its
                    existence, validity or termination or the consequences of
                    its nullity; and
                </SectionText>
                <SectionText>
                    11.1.2 this Addendum and all non-contractual or other
                    obligations arising out of or in connection with it are
                    governed by the laws of the country or territory stipulated
                    for this purpose in the Principal Agreement.
                </SectionText>
                <SectionText>
                    11.2 Order of Precedence
                    <br />
                    Nothing in this Addendum reduces Customer's obligations
                    under the Principal Agreement in relation to the protection
                    of Personal Data or permits Customer to Process (or permit
                    the Processing of) Personal Data in a manner which is
                    prohibited by the Principal Agreement. In the event of
                    inconsistencies between the provisions of this Addendum and
                    any other agreements between the parties, including the
                    Principal Agreement and including (except where explicitly
                    agreed otherwise in writing, signed on behalf of the
                    parties) agreements entered into or purported to be entered
                    into after the date of this Addendum, the provisions of this
                    Addendum shall prevail.
                </SectionText>
                <SectionText>
                    11.3 Changes in Data Protection Laws
                    <br />
                    Company may propose any variations to this Addendum which
                    Company reasonably considers to be necessary to address the
                    requirements of any Data Protection Law.
                </SectionText>
                <SectionText>
                    11.4 If Company gives notice under section 11.4, the parties
                    shall promptly discuss the proposed variations and negotiate
                    in good faith with a view to agreeing and implementing those
                    or alternative variations designed to address the
                    requirements identified in Company's notice as soon as is
                    reasonably practicable. Severance
                </SectionText>
                <SectionText>
                    11.5 Severance
                    <br />
                    Should any provision of this Addendum be invalid or
                    unenforceable, then the remainder of this Addendum shall
                    remain valid and in force. The invalid or unenforceable
                    provision shall be either (i) amended as necessary to ensure
                    its validity and enforceability, while preserving the
                    parties’ intentions as closely as possible or, if this is
                    not possible, (ii) construed in a manner as if the invalid
                    or unenforceable part had never been contained therein.
                </SectionText>
            </div>
            <div>
                <SectionText>
                    IN WITNESS WHEREOF, this Addendum is entered into and
                    becomes a binding part of the Principal Agreement with
                    effect from the date first set out above.
                </SectionText>
                <SectionText>
                    <b>ANNEX 1: DETAILS OF PROCESSING OF PERSONAL DATA</b>
                </SectionText>
                <SectionText>
                    This Annex 1 includes certain details of the Processing of
                    Company and/or Customer Personal Data as required by Article
                    28(3) GDPR.
                </SectionText>
            </div>

            <SectionHeadline>
                A: PROCESSING OF COMPANY PERSONAL DATA
            </SectionHeadline>
            <Table className="mb-5">
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <b>Subject Matter</b>
                        </TableCell>
                        <TableCell>
                            Processing carried out in connection with the
                            provision of the Services (as defined in the
                            Principle Agreement).
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Duration</b>
                        </TableCell>
                        <TableCell>
                            The term plus the period from the expiration of the
                            term until deletion of Company Data by Customer in
                            accordance with the terms of this Addendum.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Nature &amp; Purpose of the Processing</b>
                        </TableCell>
                        <TableCell>
                            Customer will process, including as applicable to
                            the instructions set forth in this Addendum, Company
                            Data for the purpose of providing the Services and
                            any related technical support to Company in
                            accordance with this Addendum.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Categories of Data Subjects</b>
                        </TableCell>
                        <TableCell>
                            Data Subjects about whom Customer collects Personal
                            Data as a Processor in the provision of the
                            Services; and Data Subjects about whom Personal Data
                            is transferred to Customer in connection with the
                            Services by, at the direction of, or on behalf of
                            Company.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Types of Personal Data</b>
                        </TableCell>
                        <TableCell>
                            The Company Data may include, but shall not be
                            limited to, the following types of Personal Data
                            depending on the Services: IP addresses and similar
                            unique IDs such as cookie IDs and device IDs
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <SectionHeadline>
                B: PROCESSING OF CUSTOMER PERSONAL DATA
            </SectionHeadline>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <b>Subject Matter</b>
                        </TableCell>
                        <TableCell>
                            Processing carried out in connection with the
                            provision of the Services (as defined in the
                            Principle Agreement).
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Duration</b>
                        </TableCell>
                        <TableCell>
                            The term plus the period from the expiration of the
                            term until deletion of Customer Data by Company in
                            accordance with the terms of this Addendum.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Nature &amp; Purpose of the Processing</b>
                        </TableCell>
                        <TableCell>
                            Company will process, including as applicable to the
                            instructions set forth in this Addendum, Customer
                            Data for the purpose of providing the Services and
                            any related technical support to Customer in
                            accordance with this Addendum.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Categories of Data Subjects</b>
                        </TableCell>
                        <TableCell>
                            Data Subjects about whom Company collects Personal
                            Data as a Processor in the provision of the
                            Services; and Data Subjects about whom Personal Data
                            is transferred to Company in connection with the
                            Services by, at the direction of, or on behalf of
                            Customer.
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <b>Types of Personal Data</b>
                        </TableCell>
                        <TableCell>
                            The Customer Data may include, but shall not be
                            limited to, the following types of Personal Data
                            depending on the Services: IP addresses and similar
                            unique IDs such as cookie IDs and device IDs
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    );
};

export default CyprusContent;
