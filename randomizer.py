# -*- coding: utf-8 -*-
from datetime import datetime, timedelta

def randomizer(name, verb):

    agreement = u"""
    <html>
    <H3>Om detta avtal</H3>
    <p>
    Detta avtal har ingåtts <strong>{date}</strong> mellan <strong>{name}</strong> (nedan kallad DEN GODE) och A3J Consulting AB (org.nr. 556736-1588) (nedan kallat A TRE J).<br><br>
    I och med detta avtals ingående förbinder sig DEN GODE att
    </p>

    <div class='verbbox' style='text-align:center;font-size:1.5em;'>
    <strong>{verb}</strong>
    </div>

    <p>(nedan kallat GÄRNINGEN). GÄRNINGEN skall utföras
    å det snaraste, dock senast {deadline} (nedan kallat DEADLINEN).
    </p>

    <p>
    Om DEN GODE inte utför HANDLINGEN före DEADLINEN kommer A TRE J att vidta legala åtgärder (nedan kallat ÅTGÄRDERNA).
    ÅTGÄRDERNA kan innefatta (men är inte begränsade till) offentlig förnedring (nedan kallat NÄTHAT), utkrävande av
    pekuniär ersättning (nedan kallat AVLATSBREV), uppläxning i enrum (nedan kallat UTVECKLINGSSAMTAL) eller dagliga
    trakasserier (nedan kallat EN VANLIG DAG PÅ KONTORET).
    </p>

    <H3>Tvist</H3>
    <p>
    Tvister gällande detta avtal regleras på Hilti BJJ (nedan kallat SLAGSMÅLSKLUBBEN) mellan DEN GODE och Jens Svensson
    (nedan kallad BROTTAREN).
    </p>

    <H3>Uppsägning</H3>
    <p>
    Detta avtal kan i princip inte sägas upp.
    </p>

    </html>
    """.format(
    date=datetime.now().date().strftime("%Y-%m-%d"),
    deadline=(datetime.now().date()+timedelta(days=30)).strftime("%Y-%m-%d"),
    name=name,
    verb=verb
    )

    return agreement