var links = [
'http://slatestarcodex.com/2015/09/11/book-review-manufacturing-consent/',
//'http://slatestarcodex.com/2015/09/05/if-you-cant-make-predictions-youre-still-in-a-crisis/',
//'http://slatestarcodex.com/2015/09/03/theses-on-trump/',
//'http://slatestarcodex.com/2015/09/02/ot27-a-comment-appears/',
//'http://slatestarcodex.com/2015/08/31/magic-markers/',
//'http://slatestarcodex.com/2015/08/30/links-815-linkering-doubts/',
//'http://slatestarcodex.com/2015/08/28/mysticism-and-pattern-matching/',
//'http://slatestarcodex.com/2015/08/24/probabilities-without-models/',
//'http://slatestarcodex.com/2015/08/20/on-overconfidence/',
//'http://slatestarcodex.com/2015/08/19/ot26-au-bon-thread/',
//'http://slatestarcodex.com/2015/08/17/the-goddess-of-everything-else-2/',
//'http://slatestarcodex.com/2015/08/16/links-815-linkety-split/',
//'http://slatestarcodex.com/2015/08/15/my-id-on-defensiveness/',
//'http://slatestarcodex.com/2015/08/13/figureground-illusions/',
//'http://slatestarcodex.com/2015/08/12/stop-adding-zeroes/',
//'http://slatestarcodex.com/2015/08/11/book-review-chronicles-of-wasted-time/',
//'http://slatestarcodex.com/2015/08/09/contrarians-crackpots-and-consensus/',
//'http://slatestarcodex.com/2015/08/07/links-815-a-link-in-the-armor/',
//'http://slatestarcodex.com/2015/08/05/ot25-obon-thread/',
//'http://slatestarcodex.com/2015/08/04/contra-hallquist-on-scientific-rationality/',
//'http://slatestarcodex.com/2015/08/02/stalin-and-summary-statistics/',
//'http://slatestarcodex.com/2015/07/28/non-dual-awareness/',
//'http://slatestarcodex.com/2015/07/24/links-715-from-link-where-rocky-peaks-climb-bleak-and-bare/',
//'http://slatestarcodex.com/2015/07/23/the-general-factor-of-correctness/',
//'http://slatestarcodex.com/2015/07/22/freedom-on-the-centralized-web/',
//'http://slatestarcodex.com/2015/07/19/ot24-hopen-change/',
//'http://slatestarcodex.com/2015/07/18/reverse-psychology/',
//'http://slatestarcodex.com/2015/07/16/cbt-in-the-water-supply/',
//'http://slatestarcodex.com/2015/07/13/things-that-sometimes-work-if-you-have-anxiety/',
//'http://slatestarcodex.com/2015/07/08/links-715-link-carbon-battery/',
//'http://slatestarcodex.com/2015/07/08/cultural-evolution-2-thanks-for-the-meme-rise/',
//'http://slatestarcodex.com/2015/07/07/the-argument-from-cultural-evolution/',
//'http://slatestarcodex.com/2015/07/04/ot23-thread-white-and-blue/',
//'http://slatestarcodex.com/2015/07/03/the-case-of-the-famous-physicist/',
//'http://slatestarcodex.com/2015/06/29/reflections-from-the-halfway-point/',
//'http://slatestarcodex.com/2015/06/24/links-615-monsters-link/',
//'http://slatestarcodex.com/2015/06/18/ot22-flow-my-tears-the-policeman-thread/',
//'http://slatestarcodex.com/2015/06/17/nyc-meetup-621/',
//'http://slatestarcodex.com/2015/06/15/fifty-more-swifties/',
//'http://slatestarcodex.com/2015/06/14/fearful-symmetry/',
//'http://slatestarcodex.com/2015/06/13/late-predictions-for-2015/',
//'http://slatestarcodex.com/2015/06/09/michigan-meetup-613/',
//'http://slatestarcodex.com/2015/06/08/links-615-everything-but-the-kitchen-link/',
//'http://slatestarcodex.com/2015/06/06/against-tulip-subsidies/',
//'http://slatestarcodex.com/2015/06/02/and-i-show-you-how-deep-the-rabbit-hole-goes/',
//'http://slatestarcodex.com/2015/06/01/ot21-master-and-commenter/',
//'http://slatestarcodex.com/2015/05/30/that-chocolate-study/',
//'http://slatestarcodex.com/2015/05/29/no-time-like-the-present-for-ai-safety-work/',
//'http://slatestarcodex.com/2015/05/24/links-515-link-floyd/',
//'http://slatestarcodex.com/2015/05/22/ai-researchers-on-ai-risk/',
//'http://slatestarcodex.com/2015/05/19/beware-summary-statistics/',
//'http://slatestarcodex.com/2015/05/17/bicameral-reasoning/',
//'http://slatestarcodex.com/2015/05/14/ot20-heavens-open/',
//'http://slatestarcodex.com/2015/05/11/california-water-you-doing/',
//'http://slatestarcodex.com/2015/05/08/links-515-tall-and-linky/',
//'http://slatestarcodex.com/2015/05/07/growth-mindset-4-growth-of-office/',
//'http://slatestarcodex.com/2015/05/06/the-future-is-filters/',
//'http://slatestarcodex.com/2015/04/30/prescriptions-paradoxes-and-perversities/',
//'http://slatestarcodex.com/2015/04/26/ot19-dont-thread-on-me/',
//'http://slatestarcodex.com/2015/04/25/nefarious-nefazodone-and-flashy-rare-side-effects/',
//'http://slatestarcodex.com/2015/04/22/growth-mindset-3-a-pox-on-growth-your-houses/',
//'http://slatestarcodex.com/2015/04/21/universal-love-said-the-cactus-person/',
//'http://slatestarcodex.com/2015/04/20/links-415-link-and-youre-dead/',
//'http://slatestarcodex.com/2015/04/19/blame-theory/',
//'http://slatestarcodex.com/2015/04/18/polemical-imbalance/',
//'http://slatestarcodex.com/2015/04/15/trouble-walking-down-the-hallway/',
//'http://slatestarcodex.com/2015/04/13/ot18-istanbul-not-constantinopen/',
//'http://slatestarcodex.com/2015/04/10/michigan-meetup-414/',
//'http://slatestarcodex.com/2015/04/10/i-will-never-have-the-ability-to-clearly-explain-my-beliefs-about-growth-mindset/',
//'http://slatestarcodex.com/2015/04/08/no-clarity-around-growth-mindset-yet/',
//'http://slatestarcodex.com/2015/04/07/no-physical-substrate-no-problem/',
//'http://slatestarcodex.com/2015/04/06/links-315-duke-of-url/',
//'http://slatestarcodex.com/2015/04/05/chemical-imbalance/',
//'http://slatestarcodex.com/2015/03/31/rational-orthography-2/',
//'http://slatestarcodex.com/2015/03/29/ot17-their-hand-is-at-your-threads-yet-ye-see-them-not/',
//'http://slatestarcodex.com/2015/03/27/highlights-from-my-notes-from-another-psychiatry-conference/',
//'http://slatestarcodex.com/2015/03/26/high-energy-ethics/',
//'http://slatestarcodex.com/2015/03/25/is-everything-a-religion/',
//'http://slatestarcodex.com/2015/03/23/links-315-linksmanship/',
//'http://slatestarcodex.com/2015/03/21/list-of-passages-i-highlighted-in-my-copy-of-machinery-of-freedom/',
//'http://slatestarcodex.com/2015/03/18/book-review-the-machinery-of-freedom/',
//'http://slatestarcodex.com/2015/03/16/list-of-passages-i-highlighted-in-my-copy-of-willpower/',
//'http://slatestarcodex.com/2015/03/15/answer-to-job/',
//'http://slatestarcodex.com/2015/03/12/ot16-avada-threadavra/',
//'http://slatestarcodex.com/2015/03/12/book-review-willpower/',
//'http://slatestarcodex.com/2015/03/11/too-good-to-be-true/',
//'http://slatestarcodex.com/2015/03/08/links-315-the-url-of-great-price/',
//'http://slatestarcodex.com/2015/03/06/effective-altruists-not-as-mentally-ill-as-you-think/',
//'http://slatestarcodex.com/2015/03/05/a-cascade-of-dunbar-numbers/',
//'http://slatestarcodex.com/2015/03/04/a-series-of-unprincipled-exceptions/',
//'http://slatestarcodex.com/2015/03/01/california-meetups-rererevised/',
//'http://slatestarcodex.com/2015/02/28/early-intervention-you-might-get-what-you-pay-for/',
//'http://slatestarcodex.com/2015/02/20/ot15-open-relationship/',
//'http://slatestarcodex.com/2015/02/19/links-215-land-of-linkin/',
//'http://slatestarcodex.com/2015/02/17/pharma-virumque/',
//'http://slatestarcodex.com/2015/02/16/did-falling-testosterone-affect-falling-crime/',
//'http://slatestarcodex.com/2015/02/14/how-likely-are-multifactorial-trends/',
//'http://slatestarcodex.com/2015/02/14/drug-testing-welfare-users-is-a-sham-but-not-for-the-reasons-you-think/',
//'http://slatestarcodex.com/2015/02/12/money-money-everywhere-but-not-a-cent-to-spend/',
//'http://slatestarcodex.com/2015/02/11/black-people-less-likely/',
//'http://slatestarcodex.com/2015/02/09/ot14-tragedy-of-the-comments/',
//'http://slatestarcodex.com/2015/02/08/the-efficacy-of-everything-in-psychiatry-in-one-graph-plus-several-pages-of-dense-but-necessary-explanation/',
//'http://slatestarcodex.com/2015/02/06/everything-not-obligatory-is-forbidden/',
//'http://slatestarcodex.com/2015/02/04/links-215-linkconceivable/',
//'http://slatestarcodex.com/2015/02/02/practically-a-book-review-dying-to-be-free/',
//'http://slatestarcodex.com/2015/02/01/talents-part-2-attitude-vs-altitude/',
//'http://slatestarcodex.com/2015/01/31/the-parable-of-the-talents/',
//'http://slatestarcodex.com/2015/01/27/ot13-thread-the-blood-of-angry-men/',
//'http://slatestarcodex.com/2015/01/25/a-philosopher-walks-into-a-coffee-shop/',
//'http://slatestarcodex.com/2015/01/24/perceptions-of-required-ability-act-as-a-proxy-for-actual-required-ability-in-explaining-the-gender-gap/',
//'http://slatestarcodex.com/2015/01/21/these-are-a-few-more-of-my-least-favorite-things/',
//'http://slatestarcodex.com/2015/01/17/links-12014-link-for-you-know-not-whence-you-came-nor-why/',
//'http://slatestarcodex.com/2015/01/15/depression-is-not-a-proxy-for-social-dysfunction/',
//'http://slatestarcodex.com/2015/01/13/evil-is-anti-inductive/',
//'http://slatestarcodex.com/2015/01/12/the-physics-diet/',
//'http://slatestarcodex.com/2015/01/11/the-phatic-and-the-anti-inductive/',
//'http://slatestarcodex.com/2015/01/09/ot12-openness-to-threadxperience/',
//'http://slatestarcodex.com/2015/01/06/links-12015-an-extraordinary-url-in-an-ordinary-world/',
//'http://slatestarcodex.com/2015/01/05/chronic-psychitis/',
//'http://slatestarcodex.com/2015/01/04/ethics-offsets/',
//'http://slatestarcodex.com/2015/01/01/2014-predictions-calibration-results/',
//'http://slatestarcodex.com/2015/01/01/untitled/',
//'http://slatestarcodex.com/2014/12/28/links-1214-auld-link-syne/',
//'http://slatestarcodex.com/2014/12/25/book-review-whats-wrong-with-the-world/',
//'http://slatestarcodex.com/2014/12/24/there-are-rules-here/',
//'http://slatestarcodex.com/2014/12/19/ot11-openezer-scrooge/',
//'http://slatestarcodex.com/2014/12/19/nobody-is-perfect-everything-is-commensurable/',
//'http://slatestarcodex.com/2014/12/17/the-toxoplasma-of-rage/',
//'http://slatestarcodex.com/2014/12/13/debunked-and-well-refuted/',
//'http://slatestarcodex.com/2014/12/12/beware-the-man-of-one-study/',
//'http://slatestarcodex.com/2014/12/08/links-1214-come-ye-to-bethlinkhem/',
//'http://slatestarcodex.com/2014/12/07/a-story-with-zombies/',
//'http://slatestarcodex.com/2014/12/03/ot10-we-thread-kings/',
//'http://slatestarcodex.com/2014/12/03/framing-for-light-instead-of-heat/',
//'http://slatestarcodex.com/2014/12/02/book-review-on-the-road/',
//'http://slatestarcodex.com/2014/11/30/cyber-monday-product-recommendations/',
//'http://slatestarcodex.com/2014/11/27/such-mixed-feelings-about-crazymeds/',
//'http://slatestarcodex.com/2014/11/27/why-i-am-not-rene-descartes/',
//'http://slatestarcodex.com/2014/11/25/race-and-justice-much-more-than-you-wanted-to-know/',
//'http://slatestarcodex.com/2014/11/23/links-1114-i-link-therefore-i-am/',
//'http://slatestarcodex.com/2014/11/22/ot9-the-thread-pirate-roberts/',
//'http://slatestarcodex.com/2014/11/21/the-categories-were-made-for-man-not-man-for-the-categories/',
//'http://slatestarcodex.com/2014/11/21/prisons-are-built-with-bricks-of-law-a…thels-with-bricks-of-religion-but-that-doesnt-prove-a-causal-relationship/',
//'http://slatestarcodex.com/2014/11/17/republicans-are-douchebags/',
//'http://slatestarcodex.com/2014/11/16/ley-lines-of-the-midwest/',
//'http://slatestarcodex.com/2014/11/14/the-dark-side-of-divorce/',
//'http://slatestarcodex.com/2014/11/12/how-to-use-23andme-irresponsibly/',
//'http://slatestarcodex.com/2014/11/10/ot8-love-is-an-open-thread/',
//'http://slatestarcodex.com/2014/11/08/more-links-for-november-2014/',
//'http://slatestarcodex.com/2014/11/08/growing-old/',
//'http://slatestarcodex.com/2014/11/05/the-right-to-waive-your-rights/',
//'http://slatestarcodex.com/2014/11/04/ethnic-tension-and-meaningless-arguments/',
//'http://slatestarcodex.com/2014/11/03/all-in-all-another-brick-in-the-motte/',
//'http://slatestarcodex.com/2014/11/01/links-for-november-2014/',
//'http://slatestarcodex.com/2014/10/30/michigan-meetup-119/',
//'http://slatestarcodex.com/2014/10/28/open-thread-7-the-hunt-for-thread-october/',
//'http://slatestarcodex.com/2014/10/26/alcoholics-anonymous-much-more-than-you-wanted-to-know/',
//'http://slatestarcodex.com/2014/10/23/book-review-a-future-for-socialism/',
//'http://slatestarcodex.com/2014/10/20/in-the-future-everyone-will-be-famous-to-fifteen-people/',
//'http://slatestarcodex.com/2014/10/18/more-links-for-october-2014/',
//'http://slatestarcodex.com/2014/10/16/five-case-studies-on-politicization/',
//'http://slatestarcodex.com/2014/10/12/five-planets-in-search-of-a-sci-fi-story/',
//'http://slatestarcodex.com/2014/10/10/open-thread-6-open-renewal/',
//'http://slatestarcodex.com/2014/10/07/tumblr-on-miri/',
//'http://slatestarcodex.com/2014/10/06/links-for-october-2014/',
//'http://slatestarcodex.com/2014/10/05/prediction-goes-to-war/',
//'http://slatestarcodex.com/2014/10/02/simpler-times/',
//'http://slatestarcodex.com/2014/10/01/the-battle-hymn/',
//'http://slatestarcodex.com/2014/09/30/i-can-tolerate-anything-except-the-outgroup/',
//'http://slatestarcodex.com/2014/09/28/even-more-links-for-september-2014/',
//'http://slatestarcodex.com/2014/09/27/bottomless-pits-of-suffering/',
//'http://slatestarcodex.com/2014/09/27/cuddle-culture/',
//'http://slatestarcodex.com/2014/09/26/i-am-being-framed/',
//'http://slatestarcodex.com/2014/09/25/why-no-science-of-nerds/',
//'http://slatestarcodex.com/2014/09/24/streetlight-psychology/',
//'http://slatestarcodex.com/2014/09/24/book-review-red-plenty/',
//'http://slatestarcodex.com/2014/09/22/ssc-gives-a-wedding-speech/',
//'http://slatestarcodex.com/2014/09/19/open-thread-5-my-best-friends-threadding/',
//'http://slatestarcodex.com/2014/09/18/more-links-for-september-2014/',
//'http://slatestarcodex.com/2014/09/17/joint-over-and-underdiagnosis/',
//'http://slatestarcodex.com/2014/09/15/ozy-a-response-to-spandrell/',
//'http://slatestarcodex.com/2014/09/14/does-class-warfare-have-a-free-rider-problem/',
//'http://slatestarcodex.com/2014/09/13/book-review-singer-on-marx/',
//'http://slatestarcodex.com/2014/09/12/what-the-hell-hegel/',
//'http://slatestarcodex.com/2014/09/10/society-is-fixed-biology-is-mutable/',
//'http://slatestarcodex.com/2014/09/08/links-for-september-2014/',
//'http://slatestarcodex.com/2014/09/08/open-thread-4-the-quick-and-the-thread/',
//'http://slatestarcodex.com/2014/09/05/mapmaker-mapmaker-make-me-a-map/',
//'http://slatestarcodex.com/2014/09/04/cooperation-un-veiled/',
//'http://slatestarcodex.com/2014/09/03/the-guardian-vs-induction/',
//'http://slatestarcodex.com/2014/09/01/book-review-and-highlights-quantum-computing-since-democritus/',
//'http://slatestarcodex.com/2014/08/31/radicalizing-the-romanceless/',
//'http://slatestarcodex.com/2014/08/30/michigan-meetup-97/',
//'http://slatestarcodex.com/2014/08/28/more-links-for-august/',
//'http://slatestarcodex.com/2014/08/26/if-the-media-reported-on-other-dangers-like-it-does-ai-risk/',
//'http://slatestarcodex.com/2014/08/24/the-invisible-nation-reconciling-utilitarianism-and-contractualism/',
//'http://slatestarcodex.com/2014/08/23/nobody-likes-a-tattletale/',
//'http://slatestarcodex.com/2014/08/20/ozys-anti-heartiste-faq/',
//'http://slatestarcodex.com/2014/08/18/open-thread-3-threads-are-like-parachutes/',
//'http://slatestarcodex.com/2014/08/17/links-for-august-2014/',
//'http://slatestarcodex.com/2014/08/16/an-iron-curtain-has-descended-upon-psychopharmacology/',
//'http://slatestarcodex.com/2014/08/16/burdens/',
//'http://slatestarcodex.com/2014/08/14/fifty-swifties/',
//'http://slatestarcodex.com/2014/08/14/beware-isolated-demands-for-rigor/',
//'http://slatestarcodex.com/2014/08/12/does-race-exist-does-culture/',
//'http://slatestarcodex.com/2014/08/11/does-the-glasgow-coma-scale-exist-do-comas/',
//'http://slatestarcodex.com/2014/08/10/getting-eulered/',
//'http://slatestarcodex.com/2014/08/09/friendship-is-still-countersignaling/',
//'http://slatestarcodex.com/2014/08/06/random-noise-is-our-most-valuable-resource/',
//'http://slatestarcodex.com/2014/08/05/negative-creativity/',
//'http://slatestarcodex.com/2014/08/03/unspoken-ground-assumptions-of-discussion/',
//'http://slatestarcodex.com/2014/08/01/misperceptions-on-moloch/',
//'http://slatestarcodex.com/2014/07/30/meditations-on-moloch/',
//'http://slatestarcodex.com/2014/07/28/weird-psychiatric-ads-of-the-seventies/',
//'http://slatestarcodex.com/2014/07/25/more-links-for-july-2014/',
//'http://slatestarcodex.com/2014/07/24/some-antibiotic-stagnation/',
//'http://slatestarcodex.com/2014/07/22/the-other-codex/',
//'http://slatestarcodex.com/2014/07/21/no-skyscraper-stagnation/',
//'http://slatestarcodex.com/2014/07/21/promising-the-moon/',
//'http://slatestarcodex.com/2014/07/18/open-thread-2-free-minds-free-threads/',
//'http://slatestarcodex.com/2014/07/17/heartmath-considered-incoherent/',
//'http://slatestarcodex.com/2014/07/17/psychotropic-base-rates-the-argument-from-antibiotics/',
//'http://slatestarcodex.com/2014/07/14/ecclesiology-for-atheists/',
//'http://slatestarcodex.com/2014/07/13/growing-children-for-bostroms-disneyland/',
//'http://slatestarcodex.com/2014/07/11/links-for-july-2014/',
//'http://slatestarcodex.com/2014/07/07/ssris-much-more-than-you-wanted-to-know/',
//'http://slatestarcodex.com/2014/07/07/social-justice-and-words-words-words/',
//'http://slatestarcodex.com/2014/07/06/list-of-the-passages-i-highlighted-in-my-copy-the-two-income-trap/',
//'http://slatestarcodex.com/2014/07/04/ozy-vs-scott-on-charity-baskets/',
//'http://slatestarcodex.com/2014/07/02/how-common-are-science-failures/',
//'http://slatestarcodex.com/2014/06/30/medicine-as-not-seen-on-tv/',
//'http://slatestarcodex.com/2014/06/29/invisible-women/',
//'http://slatestarcodex.com/2014/06/28/book-review-the-two-income-trap/',
//'http://slatestarcodex.com/2014/06/25/ssc-gets-world-cup-fever/',
//'http://slatestarcodex.com/2014/06/24/the-placebo-singers/',
//'http://slatestarcodex.com/2014/06/23/court-ing-disaster/',
//'http://slatestarcodex.com/2014/06/21/the-art-of-writing-randian-monologues/',
//'http://slatestarcodex.com/2014/06/20/ground-morality-in-party-politics/',
//'http://slatestarcodex.com/2014/06/19/money-on-the-ground/',
//'http://slatestarcodex.com/2014/06/18/more-links-for-june-2014/',
//'http://slatestarcodex.com/2014/06/16/things-that-sometimes-help-if-youre-depressed/',
//'http://slatestarcodex.com/2014/06/15/fish-now-by-prescription/',
//'http://slatestarcodex.com/2014/06/14/living-by-the-sword/',
//'http://slatestarcodex.com/2014/06/12/list-of-the-passages-i-highlighted-in-my-copy-of-jonathan-haidts-the-righteous-mind/',
//'http://slatestarcodex.com/2014/06/09/constant-vigilance/',
//'http://slatestarcodex.com/2014/06/09/minutes-from-the-michigan-rationalist-meetup/',
//'http://slatestarcodex.com/2014/06/08/map-territory-distinctions/',
//'http://slatestarcodex.com/2014/06/07/archipelago-and-atomic-communitarianism/',
//'http://slatestarcodex.com/2014/06/05/dont-be-an-asch-hole/',
//'http://slatestarcodex.com/2014/06/04/open-thread/',
//'http://slatestarcodex.com/2014/06/03/asches-to-asches/',
//'http://slatestarcodex.com/2014/06/03/southeast-michigan-meetup-68/',
//'http://slatestarcodex.com/2014/06/02/links-for-june-2014/',
//'http://slatestarcodex.com/2014/05/30/the-wonderful-thing-about-triggers/',
//'http://slatestarcodex.com/2014/05/28/dont-fear-the-filter/',
//'http://slatestarcodex.com/2014/05/27/on-types-of-typologies/',
//'http://slatestarcodex.com/2014/05/26/compound-interest-is-the-least-powerful-force-in-the-universe/',
//'http://slatestarcodex.com/2014/05/25/apologia-pro-vita-sua/',
//'http://slatestarcodex.com/2014/05/24/nydwracus-fnords/',
//'http://slatestarcodex.com/2014/05/23/ssc-gives-a-graduation-speech/',
//'http://slatestarcodex.com/2014/05/19/nerds-can-be-bees-too/',
//'http://slatestarcodex.com/2014/05/16/you-kant-dismiss-universalizability/',
//'http://slatestarcodex.com/2014/05/14/more-links-for-may-2014/',
//'http://slatestarcodex.com/2014/05/13/getting-a-therapist/',
//'http://slatestarcodex.com/2014/05/12/weak-men-are-superweapons/',
//'http://slatestarcodex.com/2014/05/10/infinite-debt/',
//'http://slatestarcodex.com/2014/05/08/vote-on-values-outsource-beliefs/',
//'http://slatestarcodex.com/2014/05/06/not-even-a-real-links-post-just-a-blatant-ad/',
//'http://slatestarcodex.com/2014/05/06/evening-doc/',
//'http://slatestarcodex.com/2014/05/05/not-even-a-real-links-post-just-a-link/',
//'http://slatestarcodex.com/2014/05/04/emotionally-valent-links-post/',
//'http://slatestarcodex.com/2014/05/02/causal-models-at-work/',
//'http://slatestarcodex.com/2014/05/01/utopian-science/',
//'http://slatestarcodex.com/2014/05/01/links-for-may-2014/',
//'http://slatestarcodex.com/2014/04/28/the-control-group-is-out-of-control/',
//'http://slatestarcodex.com/2014/04/26/stop-confounding-yourself-stop-confounding-yourself/',
//'http://slatestarcodex.com/2014/04/25/metaphors-be-with-you/',
//'http://slatestarcodex.com/2014/04/23/friendship-is-countersignaling/',
//'http://slatestarcodex.com/2014/04/22/right-is-the-new-left/',
//'http://slatestarcodex.com/2014/04/21/the-economics-of-art-and-the-art-of-economics/',
//'http://slatestarcodex.com/2014/04/19/plutocracy-isnt-about-money/',
//'http://slatestarcodex.com/2014/04/18/confounder-of-the-day-how-sexy-your-parents-were/',
//'http://slatestarcodex.com/2014/04/17/someone-writes-an-anti-racist-faq/',
//'http://slatestarcodex.com/2014/04/16/do-you-believe-me-doc/',
//'http://slatestarcodex.com/2014/04/15/the-cowpox-of-doubt/',
//'http://slatestarcodex.com/2014/04/14/links-for-april-2014/',
//'http://slatestarcodex.com/2014/04/11/going-loopy/',
//'http://slatestarcodex.com/2014/04/10/dermatology-quiz-answers/',
//'http://slatestarcodex.com/2014/04/09/dermatology-pop-quiz/',
//'http://slatestarcodex.com/2014/04/08/housekeeping-post-april-2014/',
//'http://slatestarcodex.com/2014/04/03/the-study-of-anglophysics/',
//'http://slatestarcodex.com/2014/03/30/wheat-much-more-than-you-wanted-to-know/',
//'http://slatestarcodex.com/2014/03/28/the-characters-complaint/',
//'http://slatestarcodex.com/2014/03/25/e-cig-study-much-smoke-little-light/',
//'http://slatestarcodex.com/2014/03/24/should-you-reverse-any-advice-you-hear/',
//'http://slatestarcodex.com/2014/03/22/more-links-for-march-2014/',
//'http://slatestarcodex.com/2014/03/20/typical-mind-and-disbelief-in-straight-people/',
//'http://slatestarcodex.com/2014/03/20/michigan-meetup-and-memory-workshop-323/',
//'http://slatestarcodex.com/2014/03/17/what-universal-human-experiences-are-you-missing-without-realizing-it/',
//'http://slatestarcodex.com/2014/03/15/can-it-be-wrong-to-crystallize-patterns/',
//'http://slatestarcodex.com/2014/03/13/five-years-and-one-week-of-less-wrong/',
//'http://slatestarcodex.com/2014/03/10/the-bible-in-palindromes/',
//'http://slatestarcodex.com/2014/03/08/the-slate-star-codex-political-spectrum-quiz/',
//'http://slatestarcodex.com/2014/03/06/links-for-march-2014/',
//'http://slatestarcodex.com/2014/03/04/book-review-the-perfect-health-diet/',
//'http://slatestarcodex.com/2014/03/03/do-life-hacks-ever-reach-fixation/',
//'http://slatestarcodex.com/2014/03/02/the-comment-policy-is-victorian-sufi-buddha-lite/',
//'http://slatestarcodex.com/2014/03/02/correction-mountain-view-meetup-34/',
//'http://slatestarcodex.com/2014/03/01/searching-for-one-sided-tradeoffs/',
//'http://slatestarcodex.com/2014/02/28/unteachable-things-hard-to-teach-study-suggests/',
//'http://slatestarcodex.com/2014/02/25/fix-science-in-half-an-hour/',
//'http://slatestarcodex.com/2014/02/25/suggest-a-comments-policy/',
//'http://slatestarcodex.com/2014/02/24/more-links-for-february-2014/',
//'http://slatestarcodex.com/2014/02/23/in-favor-of-niceness-community-and-civilization/',
//'http://slatestarcodex.com/2014/02/20/effects-of-vertical-acceleration-on-wrongness/',
//'http://slatestarcodex.com/2014/02/19/god-bless-longecity/',
//'http://slatestarcodex.com/2014/02/18/proposed-biological-explanations-for-historical-trends-in-crime/',
//'http://slatestarcodex.com/2014/02/17/lies-damned-lies-and-social-media-part-5-of-%e2%88%9e/',
//'http://slatestarcodex.com/2014/02/16/nootropics-survey-results-and-analysis/',
//'http://slatestarcodex.com/2014/02/14/bad-dreams/',
//'http://slatestarcodex.com/2014/02/13/housekeeping-post-february-2014/',
//'http://slatestarcodex.com/2014/02/11/blogging-the-anissimov-smith-reaction-debate/',
//'http://slatestarcodex.com/2014/02/10/links-for-february-2014/',
//'http://slatestarcodex.com/2014/02/08/seeming-and-being-empathetic/',
//'http://slatestarcodex.com/2014/02/03/more-search-terms-that-have-led-people-to-this-blog/',
//'http://slatestarcodex.com/2014/02/02/based-on-your-findings-which-theory-about-alien-thickness-seems-most-valid-or-most-accurate/',
//'http://slatestarcodex.com/2014/01/28/wirehead-gods-on-lotus-thrones/',
//'http://slatestarcodex.com/2014/01/28/predictions-for-2014/',
//'http://slatestarcodex.com/2014/01/26/more-links-for-january/',
//'http://slatestarcodex.com/2014/01/25/beware-mass-produced-medical-recommendations/',
//'http://slatestarcodex.com/2014/01/19/genetic-testing-and-self-fulfilling-prophecies/',
//'http://slatestarcodex.com/2014/01/15/ten-things-i-want-to-stop-seeing-on-the-internet-in-2014/',
//'http://slatestarcodex.com/2014/01/12/areteaus-on-bipolar-disorder/',
//'http://slatestarcodex.com/2014/01/12/a-response-to-apophemi-on-triggers/',
//'http://slatestarcodex.com/2014/01/08/links-for-january/',
//'http://slatestarcodex.com/2014/01/05/marijuana-much-more-than-you-wanted-to-know/',
//'http://slatestarcodex.com/2014/01/02/two-dark-side-statistics-papers/',
//'http://slatestarcodex.com/2013/12/29/the-spirit-of-the-first-amendment/',
//'http://slatestarcodex.com/2013/12/28/a-comment-i-posted-on-what-would-jt-do/',
//'http://slatestarcodex.com/2013/12/28/meetup-southeast-michigan/',
//'http://slatestarcodex.com/2013/12/24/repost-a-christmas-poem/',
//'http://slatestarcodex.com/2013/12/23/we-are-all-msscribe/',
//'http://slatestarcodex.com/2013/12/22/public-awareness-campaigns/',
//'http://slatestarcodex.com/2013/12/18/less-wrong-more-rite-ii/',
//'http://slatestarcodex.com/2013/12/17/statistical-literacy-among-doctors-now-lower-than-chance/',
//'http://slatestarcodex.com/2013/12/13/more-links-for-december/',
//'http://slatestarcodex.com/2013/12/12/papal-pr/',
//'http://slatestarcodex.com/2013/12/08/a-something-sort-of-like-left-libertarianism-ist-manifesto/',
//'http://slatestarcodex.com/2013/12/04/the-logician-and-the-god-emperor/',
//'http://slatestarcodex.com/2013/12/02/more-fictional-drugs-banned-by-the-fda/',
//'http://slatestarcodex.com/2013/12/01/links-for-december/',
//'http://slatestarcodex.com/2013/12/01/empireforest-fire/',
//'http://slatestarcodex.com/2013/11/28/the-story-of-thanksgiving-is-a-science-fiction-story/',
//'http://slatestarcodex.com/2013/11/26/a-letter-i-will-probably-send-to-the-fda/',
//'http://slatestarcodex.com/2013/11/21/november-housekeeping-post/',
//'http://slatestarcodex.com/2013/11/19/genetic-russian-roulette/',
//'http://slatestarcodex.com/2013/11/17/more-links-for-november/',
//'http://slatestarcodex.com/2013/11/10/highlights-from-my-notes-from-a-forensic-psychiatry-conference-last-week/',
//'http://slatestarcodex.com/2013/11/08/lies-damned-lies-and-facebook-part-4-of-%e2%88%9e/',
//'http://slatestarcodex.com/2013/11/04/list-of-reasons-why-gunpowder-treason-should-be-forgot/',
//'http://slatestarcodex.com/2013/11/03/the-witching-hour/',
//'http://slatestarcodex.com/2013/11/01/links-for-november/',
//'http://slatestarcodex.com/2013/10/31/the-poor-you-will-always-have-with-you/',
//'http://slatestarcodex.com/2013/10/25/list-of-fictional-drugs-banned-by-the-fda/',
//'http://slatestarcodex.com/2013/10/24/some-preliminary-responses-to-responses-to-the-anti-reactionary-faq/',
//'http://slatestarcodex.com/2013/10/20/the-anti-reactionary-faq/',
//'http://slatestarcodex.com/2013/09/30/links-for-octember/',
//'http://slatestarcodex.com/2013/09/28/sleep-now-by-prescription/',
//'http://slatestarcodex.com/2013/09/25/the-trend-evaluation-of-all-values/',
//'http://slatestarcodex.com/2013/09/24/prediction-is-very-difficult-especially-of-the-past/',
//'http://slatestarcodex.com/2013/09/21/the-thin-blue-line-that-stays-bizarrely-horizontal/',
//'http://slatestarcodex.com/2013/09/19/scientific-freud/',
//'http://slatestarcodex.com/2013/09/18/inefficient-hot-dogs/',
//'http://slatestarcodex.com/2013/09/14/giving-and-accepting-apologies/',
//'http://slatestarcodex.com/2013/09/12/the-life-cycle-of-medical-ideas/',
//'http://slatestarcodex.com/2013/09/02/links-for-september/',
//'http://slatestarcodex.com/2013/08/30/military-strikes-are-an-extremely-cheap-way-to-help-foreigners/',
//'http://slatestarcodex.com/2013/08/29/fake-euthanasia-statistics/',
//'http://slatestarcodex.com/2013/08/25/fake-consensualism/',
//'http://slatestarcodex.com/2013/08/23/things-i-dont-understand-about-genetics-a-non-exhaustive-list/',
//'http://slatestarcodex.com/2013/08/17/fermats-last-stand-soundtrack-and-adventure-log/',
//'http://slatestarcodex.com/2013/08/14/extreme-mnemonics/',
//'http://slatestarcodex.com/2013/08/10/science-medicine-links-for-august/',
//'http://slatestarcodex.com/2013/08/06/on-first-looking-into-chapmans-pop-bayesianism/',
//'http://slatestarcodex.com/2013/07/31/holocaust-good-for-you-research-finds-but-frequent-taunting-causes-cancer-in-rats/',
//'http://slatestarcodex.com/2013/07/29/links-for-july/',
//'http://slatestarcodex.com/2013/07/25/i-myself-am-a-scientismist/',
//'http://slatestarcodex.com/2013/07/17/who-by-very-slow-decay/',
//'http://slatestarcodex.com/2013/07/09/i-atent-dead/',
//'http://slatestarcodex.com/2013/06/30/the-lottery-of-fascinations/',
//'http://slatestarcodex.com/2013/06/25/nature-is-not-a-slate-its-a-series-of-levers/',
//'http://slatestarcodex.com/2013/06/24/the-hospital-orientation/',
//'http://slatestarcodex.com/2013/06/22/social-psychology-is-a-flamethrower/',
//'http://slatestarcodex.com/2013/06/19/a-new-chapter-in-the-codex/',
//'http://slatestarcodex.com/2013/06/17/the-what-youd-implicitly-heard-before-telling-thing/',
//'http://slatestarcodex.com/2013/06/16/can-atheists-appreciate-chesterton/',
//'http://slatestarcodex.com/2013/06/14/the-virtue-of-silence/',
//'http://slatestarcodex.com/2013/06/13/arguments-from-my-opponent-believes-something/',
//'http://slatestarcodex.com/2013/06/12/biodjinnetics/',
//'http://slatestarcodex.com/2013/06/11/medical-and-psychological-studies-for-june/',
//'http://slatestarcodex.com/2013/06/11/lies-damned-lies-and-facebook-part-3-of-%e2%88%9e/',
//'http://slatestarcodex.com/2013/06/09/all-debates-are-bravery-debates/',
//'http://slatestarcodex.com/2013/06/05/moments-of-awakening/',
//'http://slatestarcodex.com/2013/06/04/links-for-june/',
//'http://slatestarcodex.com/2013/06/03/hasta-la-victorians-siempre/',
//'http://slatestarcodex.com/2013/06/01/literally-inconceivable-contraceptives-and-abortion-rates/',
//'http://slatestarcodex.com/2013/05/31/wisdom-of-the-ancients-redux/',
//'http://slatestarcodex.com/2013/05/31/hansonian-optimism/',
//'http://slatestarcodex.com/2013/05/30/fetal-attraction-abortion-and-the-principle-of-charity/',
//'http://slatestarcodex.com/2013/05/27/transhumanist-fables/',
//'http://slatestarcodex.com/2013/05/26/the-world-is-flat-and-intensively-farmed/',
//'http://slatestarcodex.com/2013/05/24/going-from-california-with-an-aching-in-my-heart/',
//'http://slatestarcodex.com/2013/05/22/the-wisdom-of-the-ancients/',
//'http://slatestarcodex.com/2013/05/22/apart-from-better-sanitation-and-medic…d-public-health-and-roads-and-public-order-what-has-modernity-done-for-us/',
//'http://slatestarcodex.com/2013/05/19/can-you-condition-yourself/',
//'http://slatestarcodex.com/2013/05/18/against-bravery-debates/',
//'http://slatestarcodex.com/2013/05/17/newtonian-ethics/',
//'http://slatestarcodex.com/2013/05/15/links-for-may/',
//'http://slatestarcodex.com/2013/05/15/overheard-in-the-box-part-ii/',
//'http://slatestarcodex.com/2013/05/15/index-posts-on-raikoth/',
//'http://slatestarcodex.com/2013/05/15/raikoth-history-religion/',
//'http://slatestarcodex.com/2013/05/13/raikoth-economics-relationships/',
//'http://slatestarcodex.com/2013/05/12/overheard-in-the-box/',
//'http://slatestarcodex.com/2013/05/11/raikoth-symbolic-beads/',
//'http://slatestarcodex.com/2013/05/10/raikoth-cities-land/',
//'http://slatestarcodex.com/2013/05/08/raikoth-corruption-priesthood/',
//'http://slatestarcodex.com/2013/05/06/raikoth-laws-language-and-society/',
//'http://slatestarcodex.com/2013/05/05/ambijectivity/',
//'http://slatestarcodex.com/2013/05/04/selection-bias-and-atheist-stereotypes/',
//'http://slatestarcodex.com/2013/05/02/if-its-worth-doing-its-worth-doing-with-made-up-statistics/',
//'http://slatestarcodex.com/2013/04/30/utility-weight-results/',
//'http://slatestarcodex.com/2013/04/29/yellow-journalism-in-the-war-on-science/',
//'http://slatestarcodex.com/2013/04/27/utilitarianism-for-engineers-part-ii/',
//'http://slatestarcodex.com/2013/04/26/links-for-april/',
//'http://slatestarcodex.com/2013/04/25/in-defense-of-psych-treatment-for-attempted-suicide/',
//'http://slatestarcodex.com/2013/04/24/product-recommendation-fb-purity/',
//'http://slatestarcodex.com/2013/04/22/implicit-association-tests-and-suicidality/',
//'http://slatestarcodex.com/2013/04/21/search-terms-that-have-led-people-to-this-blog/',
//'http://slatestarcodex.com/2013/04/20/social-justice-for-the-highly-demanding-of-rigor/',
//'http://slatestarcodex.com/2013/04/19/i-do-not-understand-rape-culture/',
//'http://slatestarcodex.com/2013/04/18/schrodingers-rapist-proves-too-much/',
//'http://slatestarcodex.com/2013/04/18/floor-employment/',
//'http://slatestarcodex.com/2013/04/15/things-i-learned-by-spending-five-thousand-years-in-an-alternate-universe/',
//'http://slatestarcodex.com/2013/04/13/proving-too-much/',
//'http://slatestarcodex.com/2013/04/12/if-a-clod-be-washed-away-by-the-sea-europe-is-the-less/',
//'http://slatestarcodex.com/2013/04/12/last-thoughts-on-virtue-ethics/',
//'http://slatestarcodex.com/2013/04/12/noisy-poll-results-and-reptilian-muslim-climatologists-from-mars/',
//'http://slatestarcodex.com/2013/04/11/virtue-ethics-not-practically-useful-either/',
//'http://slatestarcodex.com/2013/04/11/read-history-of-philosophy-backwards/',
//'http://slatestarcodex.com/2013/04/10/book-review-after-virtue-or-somebody-here-is-really-confused-and-i-just-hope-its-not-me/',
//'http://slatestarcodex.com/2013/04/08/whose-utilitarianism/',
//'http://slatestarcodex.com/2013/04/07/rpg-emergency/',
//'http://slatestarcodex.com/2013/04/06/polyamory-is-boring/',
//'http://slatestarcodex.com/2013/04/06/poor-folks-do-smile-for-now/',
//'http://slatestarcodex.com/2013/04/05/investment-and-inefficient-charity/',
//'http://slatestarcodex.com/2013/04/04/lies-damned-lies-and-facebook-part-2-of-%e2%88%9e/',
//'http://slatestarcodex.com/2013/04/04/lies-damned-lies-and-facebook-part-1-of-%e2%88%9e/',
//'http://slatestarcodex.com/2013/04/03/against-anton-wilsonism/',
//'http://slatestarcodex.com/2013/04/01/a-good-pun-is-its-own-reword/',
//'http://slatestarcodex.com/2013/03/28/thank-you-for-doing-something-ambiguously-between-smoking-and-not-smoking/',
//'http://slatestarcodex.com/2013/03/25/my-thoughts-on-the-first-40-pages-of-a…yres-after-virtue-expressed-in-the-form-of-a-slightly-modified-xkcd-comic/',
//'http://slatestarcodex.com/2013/03/24/the-death-of-wages-is-sin/',
//'http://slatestarcodex.com/2013/03/23/book-review-infinite-jest-alternate-title-look-at-me-i-read-infinite-jest/',
//'http://slatestarcodex.com/2013/03/21/if-opposites-attract-why-is-my-sister-so-pretty/',
//'http://slatestarcodex.com/2013/03/18/links-for-march/',
//'http://slatestarcodex.com/2013/03/17/my-objections-to-objectification/',
//'http://slatestarcodex.com/2013/03/17/not-just-a-mere-political-issue/',
//'http://slatestarcodex.com/2013/03/15/annuntio-vobis-gaudium-magnum-habemus-officium/',
//'http://slatestarcodex.com/2013/03/13/valleys-have-two-sides/',
//'http://slatestarcodex.com/2013/03/10/fermats-last-stand-game-rosters/',
//'http://slatestarcodex.com/2013/03/10/good-vibrations-and-subjective-temporal-granularity/',
//'http://slatestarcodex.com/2013/03/08/hitting-below-the-bible-belt/',
//'http://slatestarcodex.com/2013/03/08/we-sail-tonight-for-singapore/',
//'http://slatestarcodex.com/2013/03/07/we-wrestle-not-with-flesh-and-blood-but-against-powers-and-principalities/',
//'http://slatestarcodex.com/2013/03/04/a-thrivesurvive-theory-of-the-political-spectrum/',
//'http://slatestarcodex.com/2013/03/03/reactionary-philosophy-in-an-enormous-planet-sized-nutshell/',
//'http://slatestarcodex.com/2013/03/02/220/',
//'http://slatestarcodex.com/2013/02/28/pope-and-change-an-atheists-guide-to-vatican-decision-2013/',
//'http://slatestarcodex.com/2013/02/27/metamed-launch-day/',
//'http://slatestarcodex.com/2013/02/26/fermats-last-stand-coordination-thread/',
//'http://slatestarcodex.com/2013/02/25/people-it-turns-out-capitalism-is-actually-a-thing/',
//'http://slatestarcodex.com/2013/02/24/links-for-february-2013/',
//'http://slatestarcodex.com/2013/02/22/dungeons-and-discourse-third-edition-the-dialectic-continues/',
//'http://slatestarcodex.com/2013/02/21/a-defense-of-logical-positivism-yes-really/',
//'http://slatestarcodex.com/2013/02/20/future-tense/',
//'http://slatestarcodex.com/2013/02/19/i-liked-lovecraft-countless-primaeval-aeons-before-it-was-cool/',
//'http://slatestarcodex.com/2013/02/18/typical-mind-and-gender-identity/',
//'http://slatestarcodex.com/2013/02/17/90-of-all-claims-about-the-problems-with-medical-studies-are-wrong/',
//'http://slatestarcodex.com/2013/02/16/google-correlate-does-not-imply-google-causation/',
//'http://slatestarcodex.com/2013/02/15/you-cannot-serve-both-god-and-mammon-but-you-can-serve-mammon-by-predicting-who-will-serve-god/',
//'http://slatestarcodex.com/2013/02/14/abraham-lincoln-necromancer/',
//'http://slatestarcodex.com/2013/02/13/youre-probably-wondering-why-ive-called-you-here-today/'
];

module.exports = {links: links};
